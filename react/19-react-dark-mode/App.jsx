import Header from "./components/Header";
import "./App.css";
import { Outlet } from "react-router";
import { useState } from "react";

export default function App() {
  const [isdark, setIsDark] = useState(JSON.parse(localStorage.getItem('isdark')));
  console.log('rendering app compoenent')
  return (
    <>
      <Header theme={[isdark,setIsDark]}/>
      <Outlet context={[isdark,setIsDark]} />
    </>
  );
}
