import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Projects />
        <AboutMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
