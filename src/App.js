import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Section from "./components/Section";
import Portfolio from './components/Portfolio';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import NavContainer from './components/NavContainer';

function App() {
  return (
    <main>
      <Header />
      <NavContainer />
      {/* <Navbar />
      <Section /> */}
      <Footer />
    </main>
  );
}

export default App;