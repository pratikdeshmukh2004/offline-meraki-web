import React, { useEffect, useState } from "react";
import Pathways from "./components/pathways";
import PathwayExercise from "./components/PathwayExercise";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header.js";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Pathways />} />
          <Route path="/:name" element={<PathwayExercise />} />
        </Routes>
        {/* <Pathways /> */}

        {/* <PathwayExercise /> */}
      </BrowserRouter>
    </>
  );
};
export default App;
