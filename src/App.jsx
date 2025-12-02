// src/App.jsx
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="page-root">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {/* later: /about, /competitions, /blogs, /team, etc. */}
      </Routes>
    </div>
  );
}

export default App;
