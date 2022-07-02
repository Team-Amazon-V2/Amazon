import React from "react";
import "./Checkout.css";
import ipad from "/Users/anthonyclay/coding/AMAZON/shopping-cart/src/ipad.jpg";
import { Link } from "react-router-dom";

function Checkout(props) {
  return (
    <div className="Checkout">
      <div className="header">
      <h1>Shopping Cart</h1>
      <h4 className="priceLabel">Price</h4>
      </div>

      <hr
        style={{
          background: "lightgrey",
          color: "lightgrey",
          borderColor: "lightgrey",
          height: "3px",
          borderRadius: "3px",
        }}
      />
      <div className="container">
        <h2>
          <img src={ipad} alt="photo" />
        </h2>
        {props.item.map((elem) => {
          return (
            <div className="cont2">
              {" "}
              {elem.item}
              <h5>
              Style: WiFi<br></br>
              Color: Black<br></br>
              Size: 64GB
              </h5>
              <div className="qty">
              <select className="selectList" id="selectList">
          <option value="QTY 1">QTY: 1</option>
          <option value="QTY 2">QTY: 2</option>
          <option value="QTY 3">QTY: 3</option>
        </select> <div className="delete">Delete</div> <div className="saveForLater">Save for later</div>
              </div>
            </div>
          );
        })}
        {props.item.map((elem) => {
          return (
            <div className="cont3">
              ${elem.price}{" "}
            </div>
          );
        })}
      </div>
      <hr
        style={{
          background: "lightgrey",
          color: "lightgrey",
          borderColor: "lightgrey",
          height: "3px",
          borderRadius: "3px",
        }}
      />
      <button> Checkout </button>
      <Link to="/">
        <button className="Return">Return to item page</button>
      </Link>
    </div>
  );
}

export default Checkout;
