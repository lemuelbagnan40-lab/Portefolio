import Header from "../composants/Header";
import About from "../composants/About";
import Services from "../composants/Services";
import Skills from "../composants/Skills";
import Footer from "../composants/Footer";

function Home() {
  return (
    <>
      <Header />
      <main id="Home">
        <About />
        <Services />
        <Skills />
      </main>
      <Footer />
    </>
  );
}

export default Home;
