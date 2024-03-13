import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import CardContainer from "./components/CardContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <CardContainer />
      <Footer />
    </div>
  );
}

export default App;
