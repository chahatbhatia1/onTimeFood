import React, { Component } from "react";
import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "./components/Navbar";
import Main from "./components/main";
import Footer from "./components/footer";
import Menu from "./components/menu";
import Bill from "./components/bill";
import Goodbye from "./components/goodbye";
import { HashRouter as Router, Switch, Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart);

class App extends Component {
  state = {
    foodItems: [],
    itemTotal: 0,
    currentOrder: [],
    total: 0,
  };

  componentDidMount() {
    fetch("./datalayer/foodItems.json")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        this.setState({
          foodItems: response,
        });
      })
      .catch((err) => console.log(err));
  }

  handleAdd = (e) => {
    console.log(e);
    const items = [...this.state.foodItems];
    const index = items.indexOf(e);
    items[index] = { ...e };
    items[index].quantity++;
    let list = items.filter((item) => {
      return item.quantity > 0;
    });
    this.setState({
      foodItems: items,
      itemTotal: list.length,
    });
  };

  handleSub = (e) => {
    console.log(e);
    const items = [...this.state.foodItems];
    const index = items.indexOf(e);
    items[index] = { ...e };
    let a = items[index].quantity;
    items[index].quantity = a ? a - 1 : 0;
    let list = items.filter((item) => {
      return item.quantity > 0;
    });
    this.setState({
      foodItems: items,
      itemTotal: list.length,
    });
  };

  showBill = () => {
    let currentOrder = this.state.foodItems.filter((item) => {
      return item.quantity > 0;
    });
    if (!currentOrder.length) {
      alert("You have not selected any item , please select some.");
    }
    this.setState({ currentOrder });
  };

  render() {
    return (
      <div>
        <Router>
          <NavBar itemTotal={this.state.itemTotal} showBill={this.showBill} />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route
              path="/menu/"
              exact
              component={() => (
                <Menu
                  foodItems={this.state.foodItems}
                  onAdd={this.handleAdd}
                  onSub={this.handleSub}
                />
              )}
            />
            {this.state.itemTotal ? (
              <Route
                path="/menu/bill/"
                exact
                component={() => (
                  <Bill
                    currentOrder={this.state.currentOrder}
                    itemTotal={this.state.itemTotal}
                  />
                )}
              />
            ) : (
              <Redirect to="/menu" />
            )}
            <Route path="/menu/success/" exact component={Goodbye} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
