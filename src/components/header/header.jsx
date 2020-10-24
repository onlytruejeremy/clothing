import React from 'react'
import "./header.styles.scss"
import {Link} from "react-router-dom"
import {ReactComponent as Logo} from "../../assets/crown.svg"
import {auth} from "../../firebase/firebase.utils"
import {connect} from "react-redux";
function header({currentUser}) {
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
        </div>
        </div>
    )
}

const mapStateToProps = state => ({
currentUser: state.user.currentUser
})
export default connect(mapStateToProps)(header)
