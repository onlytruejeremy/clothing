import React from "react"
import CustomButton from "../custom-button/custom-button"
import "./cart-dropdown.styles.scss"

const CartDropDown =() => (
    <div className="cart-dropdwon">
        <div className="cart-items"/>
        <CustomButton>Go To Checkout</CustomButton>
    </div>
)

export default CartDropDown