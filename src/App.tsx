import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { router } from "./routes";
import Header from "./components/header/Header";

function App() {
  /* if I had more time I could implement error boundary here to handle uncaught errors.
    This could also be implemented in other components.   */
  return (
    <div className="app">
      <Header />
      <Routes>
        {router.map((route) => (
          <Route Component={route.element} path={route.path} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
