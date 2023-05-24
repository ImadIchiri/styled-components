import React from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Products from "./components/Products";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <section className="App">
      <Header />
      <Landing />
      <Products />
      <Footer />
    </section>
  );
};

export default App;
