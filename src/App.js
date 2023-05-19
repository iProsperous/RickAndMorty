import React from "react";
import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/UI/navbar/NavBar";
import AppRouter from "./Components/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
