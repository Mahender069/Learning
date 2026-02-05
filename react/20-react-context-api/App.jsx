import Header from "./components/Header";
import ThemeProvider from "./contexts/ThemeContext";
import { Outlet } from "react-router";
import "./App.css";

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}
