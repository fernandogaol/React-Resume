import React from "react";
import "./App.css";

function Header() {
  return (
    <div className="App-header">
      <header>
        <h1>Fernando Gaol's resume</h1>
      </header>
      <section className="App-header-img">
        <img
          src={
            "https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg"
          }
          className="App-logo"
          alt="logo"
        />
      </section>
    </div>
  );
}

export default Header;
