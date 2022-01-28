import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Section from "./components/Section";
import Portfolio from './components/Portfolio';

function App() {
  return (
    <main>
      <Header />
      <Navbar />
      <Section />
      <Portfolio />
    </main>
  );
}

export default App;