import './App.css';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import Faq from "./pages/faq";

function App() {
  return (
    <BrowserRouter>
      <Link to="/Teste">Home</Link>
      <Link to="/Faq">FAQ</Link>

      <Routes>
        <Route path="/Teste"  element={<Home />} />
        <Route path="/Faq" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
