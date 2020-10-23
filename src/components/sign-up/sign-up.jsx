import React from "react"

import FormInput from "../fom-input/form-input"
import CustomButton from "../custom-button/custom-button"

import {auth, createUserProfileDocument} from "../../firebase/firebase.utils"

import "./sign-up.styles.scss"

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }
handleSubmit = async event => {
    debugger
    event.preventDefault();
    const {displayName, email, password, confirmPassword} = this.state;
    if(password !== confirmPassword) {
        alert('password does not match')
    }
    try {
        const {user} = await auth.createUserWithEmailAndPassword(email, password);
        createUserProfileDocument(user, {displayName})
        this.setState({ displayName: "",
            email: "",
            password: "",
            confirmPassword: ""})
    } catch (error) {
        console.error(error)
    }
}

handleChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value})
}
    render() {
        const {displayName, email, password, confirmPassword} = this.state
        return (
            <div className="sign-up">
                <h2 className="title">

                </h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput type="text" name="displayName" onChange={this.handleChange} value={displayName} label={"Display Name"} required>

                </FormInput> <FormInput type="email" name="email" onChange={this.handleChange} value={email} label={"Email"} required>
            
                </FormInput> <FormInput type="password" name="password" onChange={this.handleChange} value={password} label={"Password"} required>
            
                </FormInput> <FormInput type="password" name="confirmPassword" onChange={this.handleChange} value={confirmPassword} label={"Confirm Password"} required>
            
                </FormInput>
                <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;