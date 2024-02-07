import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
