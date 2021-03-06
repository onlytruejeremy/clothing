import React from 'react'
import "./header.styles.scss"
import {Link} from "react-router-dom"
import {ReactComponent as Logo} from "../../assets/crown.svg"
import {auth} from "../../firebase/firebase.utils"
import {connect} from "react-redux";
import CartDropDown from "../cart-dropdown/cart-dropdown"
import CartIcon from "../cart-icon/cart-icon"
import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from "../../redux/cart/cart.selectors"
import {selectCurrentUser} from "../../redux/user/user.selector"
function header({currentUser, hidden}) {
    return (
        <div className="header">
        <Link to="/">
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">Shop
            </Link><Link className="option" to="/contact">Contact
            </Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>Sign Out</div> 
                :
                <Link className="option" to='/signIn'>Sign In</Link>
            }
            <CartIcon/>
        </div>
        {hidden ? null: <CartDropDown />}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
currentUser: selectCurrentUser,
hidden: selectCartHidden
})
export default connect(mapStateToProps)(header)
