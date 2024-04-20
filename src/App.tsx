import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { router } from "./routes";

function App() {
  return (
    <div className="app">
      <Routes>
        {router.map((route) => (
          <Route Component={route.element} path={route.path} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
