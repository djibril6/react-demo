import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { PageContainer } from "./components";
import Pages from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageContainer />}>
          {Pages.map((page, idx) => (
            <Route key={idx} {...page} />
          ))}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
