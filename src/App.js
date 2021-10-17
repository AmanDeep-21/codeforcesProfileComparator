import React from "react";
import "./style.css";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={"wrapper"}>
      <div>
        <Header />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
