import React from "react";
import { useEffect } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { Switch, Route, Redirect } from "react-router-dom";
import ShopPage from "./pages/Shop/ShopPage";
import Header from "./components/header/Header";
import SignPage from "./pages/SignPage/SignPage";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { checkUserSession, setcurrentUserAction } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import CheckoutPage from "./pages/checkoutPage/CheckoutPage";

function App(props) {
  const { currentUser, checkUserSession } = props;

  useEffect(() => {

    checkUserSession();
   /* let unsubscribe;
    unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      console.log(userAuth);
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);
        (await userRef).onSnapshot((snapShot) => {
          setcurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else setcurrentUser(userAuth);
    });
    return function cleanup() {
      unsubscribe();
    };*/
  }, [0]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/" component={ShopPage} />
        <Route
          exact
          path="/signin/"
          render={() => (currentUser ? <Redirect to="/" /> : <SignPage />)}
        />
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession :()=>dispatch(checkUserSession())  ,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
