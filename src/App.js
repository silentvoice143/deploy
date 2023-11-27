import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  function Home() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }

  function About() {
    return (
      <div>
        <h1>About</h1>
      </div>
    );
  }

  function Social() {
    return (
      <div>
        <h1>Social</h1>
      </div>
    );
  }

  function Contact() {
    return (
      <div>
        <h1>Contact</h1>
      </div>
    );
  }
  return (
    <BrowserRouter basename="/deploy">
      <div className="App">
        <header className="App-header">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/social">Social</Link>
        </header>
      </div>

      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/Social" Component={Social} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
