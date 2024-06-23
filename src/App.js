// import logo from './logo.svg';
// import "./App.css";
import React from "react";
import About from "./components/About";
// import Brief from "./components/Brief";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import Projects from "./components/Projects";
// import Services from "./components/Services";
import Skills from "./components/Skills";
import Works from "./components/Works";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Skills />
      <Works />
      <About />
      <Contact />
      {/* <Services />
      <Projects />
      <Footer /> */}
    </main>
  );
}

export default App;
