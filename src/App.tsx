import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App" style={{ width: "600px", height: "500px" }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>hello2</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
