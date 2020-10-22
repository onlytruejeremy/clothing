import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage"
import {Route, Switch} from "react-router-dom"
import ShopPage from "./pages/shop/shop"
import Header from "./components/header/header"
import SignInAndSignUpPage from "./pages/authentication/sign-in-and-sign-up"
import {auth} from "./firebase/firebase.utils"
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentUser: null}
  }
unsubscrubeFromAuth = null;
  componentDidMount() {
    this.unsubscrubeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
    })
  }
  componentWillUnmount() {
    this.unsubscrubeFromAuth()
  }

  render() {
  return (
    <div>
 <Header currentUser={this.state.currentUser}/>
      <Switch>
    <Route exact path="/" component={HomePage} />
    <Route  path="/shop/" component={ShopPage} />
    <Route  path="/signIn/" component={SignInAndSignUpPage} />
    </Switch>
    </div>
  );
}
  }


export default App;
