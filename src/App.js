import logo from "./logo.svg";
import "./App.css";
// import Hero from "./Components/Hero";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
      </main>
    </div>
  );
}

export default App;
