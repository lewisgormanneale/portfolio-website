import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Toolkit from "./components/Toolkit/Toolkit";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Projects />
        <AboutMe />
        <Toolkit />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
