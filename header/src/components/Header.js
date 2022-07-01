import React, { useState } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

function Header(props) {
  const [input, setInput] = useState("");
  const [itemData, setItemData] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    // console.log("working");
    fetch(`http://localhost:3512/amazon/${input}`)
      .then((res) => res.json())
      .then((data) => data.map((item) => setItemData([...itemData, item])))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="header_navbar">
        <div className="header">
          <img
            className="header_logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="header_logo"
          />
          <div className="header_locator">
            <LocationOnOutlinedIcon className="header_locatorImage" />
            <div className="header_deliver">
              <span className="header_deliverTo">Deliver to Galvanize</span>
              <span className="header_location">Austin, TX</span>
            </div>
          </div>

          <div className="header_search">
            <select className="header_dropDownMenu">
              <option value="All">All</option>
              <option value="Appliances">Appliances</option>
              <option value="Apps & Games">Apps & Games</option>
              <option value="Books">Books</option>
              <option value="Clothing">Clothing</option>
              <option value="Computers">Computers</option>
              <option value="Electronics">Electronics</option>
            </select>
            <input
              className="header_searchInput"
              type="text"
              onChange={handleInput}
              value={input}
            />
            <Search handleSearch={handleSearch} />
          </div>
          <div className="header_nav">
            <div className="header_option">
              <span className="header_optionLineOne">Hello Guest</span>
              <span className="header_optionLineTwo">Sign In</span>
            </div>
            <div className="header_option">
              <span className="header_optionLineOne">Returns</span>
              <span className="header_optionLineTwo">& Orders</span>
            </div>
            <div className="header_option">
              <span className="header_optionLineOne">Your</span>
              <span className="header_optionLineTwo">Prime</span>
            </div>
            <div className="header_optionBasket">
              <ShoppingCartIcon />
              <span className="header_optionLineTwo header_basketCount">0</span>
            </div>
          </div>
        </div>
        <Navbar />
      </div>
      <h2>{itemData.length > 0 ? itemData[0].name : "Search for an item"}</h2>
    </>
  );
}

export default Header;
