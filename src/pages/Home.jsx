import Header from "../composants/Header";
import About from "../composants/About";
import Projects from "../composants/Projects";
import Services from "../composants/Services";
import Skills from "../composants/Skills";
import Footer from "../composants/Footer";

function Home() {
  return (
    <>
      <a className="skip-link" href="#Home">Aller au contenu</a>
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
