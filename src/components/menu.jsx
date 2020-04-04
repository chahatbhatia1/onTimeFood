import React, { Component } from "react";
import "./menu.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";


class Menu extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
 
  

  render() {
    return (
      <div className="menu-container">
        <h1 className="menu-h1">Paradise on your plate !!!</h1>
        <h2 className="menu-h2">Our Menu</h2>

        {this.props.foodItems.map(foodItem => (
          <div className="card" key={foodItem.id}>
            <img src={foodItem.imgsrc} alt="" className="card-image" />
            <div className="card-title">{foodItem.name}</div>
            <div className="card-desc">
              <p>Rs. {foodItem.price}</p>
            </div>
            <div className="card-actions">
              <button
                type="button"
                className=" add badge badge-warning"
                onClick={() => this.props.onAdd(foodItem)}
              >
                +
              </button>
              <span> {foodItem.quantity}</span>
              <button
                type="button"
                className=" sub badge badge-warning"
                onClick={() => this.props.onSub(foodItem)}
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div >
    );
  }
}

export default Menu;
