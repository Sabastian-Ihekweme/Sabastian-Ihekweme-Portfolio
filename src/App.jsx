import { useRef } from "react";
import Header from "./Header";
import AnimatedRoutes from './AnimatedRoutes';
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

function App() {

  return (
    <>
      <div className="container">
        <div className="components">
          <BrowserRouter>
            <Header />
              <AnimatedRoutes />
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
