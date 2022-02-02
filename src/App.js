//importing all components needed for app to function
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Section from "./components/Section";
import Portfolio from './components/Portfolio';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import NavContainer from './components/NavContainer';

//the shell for the body of the profile that goes in the root on the index.html file
function App() {
  return (
    <main>
      <Header />
      <NavContainer />
      <Footer />
    </main>
  );
}

export default App;