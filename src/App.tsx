import React from "react";

import { HashRouter, Routes } from "react-router-dom";

import { renderRoutes } from "@/presentation/routes";

import "@/presentation/styles/index.scss";

function App() {
  return (
    <HashRouter>
      <Routes>{renderRoutes()}</Routes>
    </HashRouter>
  );
}

export default App;
