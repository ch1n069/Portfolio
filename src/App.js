import logo from "./logo.svg";
import "./App.css";
// import Hero from "./Components/Hero";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Home />
      </main>
    </div>
  );
}

export default App;
