import React, { Component } from "react";
import "./main.css";
import { Link } from "react-router-dom";

class Main extends Component {
  state = {};
  render() {
    return (
      <div className="bg-main">
        <div className="overlay">
          <h1 className="quote"> Fresh . Fast . Tasty</h1>
          <h2 className="contact">
            <span>Call Us</span> - 01 234 567 890
          </h2>
          <Link to="/menu">
            <button className="showMenuBtn">Our Menu</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Main;
