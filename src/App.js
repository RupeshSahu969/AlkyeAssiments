import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup1 from "./Components/SignUp1/Signup1";
import Signup2 from "./Components/SignUp2/Signup2";
import Dashboard from "./Components/Dashboard/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup1 />} />
        <Route path="/signup2" element={<Signup2 />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
