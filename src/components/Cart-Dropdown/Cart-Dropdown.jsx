import React from "react";

import CustomButton from "../Custom-Button/Custom-Button";
import "./Cart-Dropdown.scss";

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
