import React from "react";
import { connect } from "react-redux";

import CartItem from "../Cart-Item/Cart-Item";
import CustomButton from "../Custom-Button/Custom-Button";
import "./Cart-Dropdown.scss";

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
