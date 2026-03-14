import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Popup from "./components/Popup";
import { useState } from "react";

export default function App() {
  const [isPop, setIsPop] = useState(false);
  return (
    <>
      {isPop ? <Popup clickHandler={setIsPop} /> : ""}
      <Header clickHandler={setIsPop} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
