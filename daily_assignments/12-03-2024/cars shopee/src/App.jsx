import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";
import CardContainer from "./CardContainer";

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
