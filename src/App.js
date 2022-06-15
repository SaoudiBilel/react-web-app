import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./components/Counter";
import About from "./components/about/About";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <nav className="navbar navbar-expand navbar-brand m-2">
          <ul className="navbar-nav">
            <li>
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/counter">
                Counter
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/gallery">
                Gallery
              </Link>
            </li>
          </ul>
        </nav>
        <div className="m-4">
          <Routes>
            <Route
              path="/counter"
              element={
                <>
                  <Counter title="Profile" value={1} image="images/profile.png"/>
                  <Counter title="Panda" value={1} image="images/panda.png" />
                </>
              }
            ></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/gallery" element={<Gallery/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
