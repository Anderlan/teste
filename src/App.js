import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Faq from "./pages/faq";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/"  element={<Home />} />
        <Route path="/Faq" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
