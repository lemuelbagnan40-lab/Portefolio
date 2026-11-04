import { writeFileSync } from "node:fs";

const tabResponse = await fetch(
  "http://127.0.0.1:9225/json/new?http://127.0.0.1:5173/",
  { method: "PUT" },
);
const tab = await tabResponse.json();
const socket = new WebSocket(tab.webSocketDebuggerUrl);
let nextId = 0;
const pendingCommands = new Map();

socket.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  const pending = pendingCommands.get(message.id);

  if (pending) {
    pendingCommands.delete(message.id);
    pending.resolve(message);
  }
});

await new Promise((resolve, reject) => {
  socket.addEventListener("open", resolve, { once: true });
  socket.addEventListener("error", reject, { once: true });
});

function send(method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = ++nextId;
    pendingCommands.set(id, { resolve, reject });
    socket.send(JSON.stringify({ id, method, params }));
  });
}

async function evaluate(expression) {
  const response = await send("Runtime.evaluate", {
    expression,
    returnByValue: true,
    awaitPromise: true,
  });

  if (response.error) throw new Error(response.error.message);
  return response.result.result.value;
}

async function waitForPage() {
  await evaluate(
    "new Promise(resolve => { const check = () => document.querySelector('.about-text h1') ? setTimeout(resolve, 900) : setTimeout(check, 50); check(); })",
  );
}

await send("Page.enable");
await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", {
  width: 1440,
  height: 1000,
  deviceScaleFactor: 1,
  mobile: false,
});
await send("Page.navigate", { url: "http://127.0.0.1:5173/" });
await waitForPage();

const desktop = await evaluate(`(() => {
  const title = document.querySelector('.about-text h1');
  const rect = title.getBoundingClientRect();
  return {
    viewportWidth: innerWidth,
    documentWidth: document.documentElement.scrollWidth,
    heroTitle: { left: rect.left, right: rect.right, width: rect.width },
    titleOpacity: getComputedStyle(title).opacity,
    headerPosition: getComputedStyle(document.querySelector('.site-header')).position,
  };
})()`);

await evaluate(
  "document.getElementById('Projects').scrollIntoView({ behavior: 'instant', block: 'start' })",
);
await new Promise((resolve) => setTimeout(resolve, 500));
const projectImage = await evaluate(`(() => {
  const image = document.querySelector('.project-logo');
  return { loaded: image.complete, naturalWidth: image.naturalWidth, url: image.currentSrc };
})()`);
const projectsShot = await send("Page.captureScreenshot", {
  format: "png",
  captureBeyondViewport: false,
});
writeFileSync(
  "C:\\Personnal_projec\\Portefolio\\portfolio-projects.png",
  Buffer.from(projectsShot.result.data, "base64"),
);
await evaluate("window.scrollTo(0, 0)");
await new Promise((resolve) => setTimeout(resolve, 250));

await send("Emulation.setDeviceMetricsOverride", {
  width: 390,
  height: 844,
  deviceScaleFactor: 1,
  mobile: true,
});
await new Promise((resolve) => setTimeout(resolve, 250));

const mobile = await evaluate(`(() => {
  const container = document.querySelector('.about-container').getBoundingClientRect();
  const title = document.querySelector('.about-text h1').getBoundingClientRect();
  const eyebrow = document.querySelector('.about-eyebrow').getBoundingClientRect();
  return {
    viewportWidth: innerWidth,
    documentWidth: document.documentElement.scrollWidth,
    container: { left: container.left, right: container.right, width: container.width },
    title: { left: title.left, right: title.right, width: title.width },
    eyebrow: { left: eyebrow.left, right: eyebrow.right, width: eyebrow.width },
    titleFontSize: getComputedStyle(document.querySelector('.about-text h1')).fontSize,
  };
})()`);

const mobileShot = await send("Page.captureScreenshot", {
  format: "png",
  captureBeyondViewport: false,
});
writeFileSync(
  "C:\\Personnal_projec\\Portefolio\\portfolio-mobile.png",
  Buffer.from(mobileShot.result.data, "base64"),
);

await evaluate("document.querySelector('.menu-toggle').click()");
await new Promise((resolve) => setTimeout(resolve, 250));
const menuOpen = await evaluate(`(() => ({
  expanded: document.querySelector('.menu-toggle').getAttribute('aria-expanded'),
  visibility: getComputedStyle(document.querySelector('#primary-navigation')).visibility,
  opacity: getComputedStyle(document.querySelector('#primary-navigation')).opacity,
}))()`);
const menuShot = await send("Page.captureScreenshot", {
  format: "png",
  captureBeyondViewport: false,
});
writeFileSync(
  "C:\\Personnal_projec\\Portefolio\\portfolio-menu-mobile.png",
  Buffer.from(menuShot.result.data, "base64"),
);

await evaluate(
  "document.querySelector('.menu-toggle').dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))",
);
await new Promise((resolve) => setTimeout(resolve, 50));
const menuAfterEscape = await evaluate(`(() => ({
  expanded: document.querySelector('.menu-toggle').getAttribute('aria-expanded'),
  toggleHasFocus: document.activeElement.classList.contains('menu-toggle'),
}))()`);

await send("Emulation.setEmulatedMedia", {
  features: [{ name: "prefers-reduced-motion", value: "reduce" }],
});
const reducedMotion = await evaluate(
  "getComputedStyle(document.querySelector('.about-text h1')).animationName",
);

console.log(JSON.stringify({ desktop, mobile, projectImage, menuOpen, menuAfterEscape, reducedMotion }, null, 2));
socket.close();
