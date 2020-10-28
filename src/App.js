import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage"
import {Route, Switch, Redirect} from "react-router-dom"
import ShopPage from "./pages/shop/shop"
import Header from "./components/header/header"
import SignInAndSignUpPage from "./pages/authentication/sign-in-and-sign-up"
import {auth} from "./firebase/firebase.utils"
import {createUserProfileDocument} from "./firebase/firebase.utils"
import {connect} from "react-redux"
import {setCurrentUser} from "./redux/user/user.actions"
import {createStructuredSelector} from "reselect"
import { selectCurrentUser } from './redux/user/user.selector';
import CheckoutPage from "./pages/checkout/checkout"
class App extends React.Component {

unsubscribeFromAuth = null;
  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscrubeFromAuth()
  }

  render() {
  return (
    <div>
 <Header/>
      <Switch>
    <Route exact path="/" component={HomePage} />
    <Route  path="/shop" component={ShopPage} />
    <Route  path="/checkout" component={CheckoutPage} />
    <Route exact path="/signIn" render={() => this.props.currentUser ? (<Redirect to='/' />) : (
      <SignInAndSignUpPage/>
    )} />
    </Switch>
    </div>
  );
}
  }
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
