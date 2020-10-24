import React from 'react'
import "./custom-button.styles.scss"
function CustomButton({children, handleClick, isGoogleSignIn, inverted, ...props}) {
    return (
        <button className={` ${inverted ? 'inverted' : ''}${isGoogleSignIn ? 'google-sign-in' : ""} custom-button`} onClick={handleClick}>
{children} 
        </button>
    )
}

export default CustomButton;


