import Header from "./components/Header";
import "./App.css";
import { Outlet } from "react-router";

export default function App() {
  console.log('rendering app component');
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
