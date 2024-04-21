import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { router } from "./routes";
import Header from "./components/header/Header";
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "./components/fallback/Fallback";

function App() {
  return (
    <ErrorBoundary fallback={<Fallback />}>
      <div className="app">
        <Header />
        <Routes>
          {router.map((route) => (
            <Route Component={route.element} path={route.path} />
          ))}
        </Routes>
      </div>
    </ErrorBoundary>
  );
}

export default App;
