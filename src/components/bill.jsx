import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./bill.css";


class Bill extends Component {

    state = {
        total: 0
    }

    componentDidMount(){
    let totalBill = () => {
        let total = 0;
        let arr = [...this.props.currentOrder];
       for (let i = 0;i<arr.length;i++) {
              total += arr[i].quantity * arr[i].price;
       }
       this.setState({ total });
    }
    totalBill();
    }

render(){
  return (
    <div>
        
      <h2>Bill Summary</h2>
      {console.log(this.props)}

      <div className="container">
        <h4>
          Cart{" "}
          <span className="price">
  <FontAwesomeIcon icon="shopping-cart" /> <b>{this.props.itemTotal}</b>
          </span>
        </h4>
        <br />
        {this.props.currentOrder.map(item => {
          return (
            <p>
             {item.name}{" "}
          <span className="price">{item.quantity} x Rs. {item.price}</span>
            </p>
          );
        })}
        <p>
          <b>Total</b>{" "}
          <span className="price">
            <b>Rs. {this.state.total}</b>
          </span>
        </p>
      </div>
      <div className="btn-container">
          <Link to="/menu/success/"><button className="btn" >Confirm Order</button></Link>
      </div>
    </div>
  );
};
}

export default Bill;
