import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ExperienceDetail from "./pages/ExperienceDetail";

function App() {
  useEffect(() => {
    document.body.classList.add("dark");
  }, []);

  return (
    <div className="bg-black-100 min-h-screen w-full  scroll-smooth">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience/:id" element={<ExperienceDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
