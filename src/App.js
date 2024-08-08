import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogList from "./BlogList";
import BlogDetail from "./BlogDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        
        <header className="app-header">
          <img src="/pplogo.png" alt="PostPalette Logo" className="logo" />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
