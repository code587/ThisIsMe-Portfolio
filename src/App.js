import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Section from "./components/Section";
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <main>
      <Header />
      <Navbar />
      <Section />
      <Portfolio />
      <Contact />
    </main>
  );
}

export default App;