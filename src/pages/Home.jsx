import { useEffect } from "react";
import Header from "../composants/Header";
import About from "../composants/About";
import Projects from "../composants/Projects";
import Services from "../composants/Services";
import Skills from "../composants/Skills";
import Footer from "../composants/Footer";

function Home() {
  useEffect(() => {
    document.documentElement.classList.add("js-ready");

    const elements = document.querySelectorAll(".reveal-on-scroll");
    if (!elements.length) return;

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#Home">
        Aller au contenu
      </a>
      <Header />
      <main id="Home" tabIndex="-1">
        <About />
        <Projects />
        <Services />
        <Skills />
      </main>
      <Footer />
    </>
  );
}

export default Home;
