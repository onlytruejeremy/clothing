import React from 'react'
import "./header.styles.scss"
import {Link} from "react-router-dom"
import {ReactComponent as Logo} from "../../assets/crown.svg"
function header() {
    return (
        <div className="header">
        <Link to="/">
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">Shop
            </Link><Link className="option" to="/contact">Contact
            </Link>
        </div>
        </div>
    )
}

export default header
