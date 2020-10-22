import React from 'react'
import "./custom-button.styles.scss"
function CustomButton({children, handleClick, isGoogleSignIn, ...props}) {
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ""} custom-button`} onClick={handleClick}>
{children} 
        </button>
    )
}

export default CustomButton;


