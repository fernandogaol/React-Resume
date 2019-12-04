import React from "react";
import "./App.css";
import Header from "./Header";
import Education from "./Education";
import Employment from "./Employment";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <main className="App-main">
        <Education></Education>

        <Employment></Employment>

        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
