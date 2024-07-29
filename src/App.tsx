import { navItems } from "./data";

import Hero from "./components/Hero";
import Grid from "./components/Grid";
import Footer from "./components/Footer";
import Clients from "./components/Clients";
import Approach from "./components/Approach";
import Experience from "./components/Experience";
import RecentProjects from "./components/RecentProjects";
import { FloatingNav } from "./components/ui/FloatingNavbar";
import About from "./components/About";
import Techstacks from "./components/Techstacks";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.body.classList.add("dark");
  }, []);

  return (
    <>
      <main className="relative  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-black-100">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <About />
          <Grid />
          <Techstacks />
          <RecentProjects />
          <Clients />
          <Experience />
          <Approach />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
