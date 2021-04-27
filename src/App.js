import { useEffect} from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/Shop/ShopPage";
import Header from "./components/header/Header";
import SignPage from "./pages/SignPage/SignPage";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setcurrentUserAction } from "./redux/user/user.actions";


function App(props) {

   const {setcurrentUser}=props

  useEffect(() => {
    let unsubscribe;
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
    };
  });

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/" component={ShopPage} />
        <Route path="/signin/" component={SignPage} />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setcurrentUser: (user) => dispatch(setcurrentUserAction(user)),
});  

export default connect(null,mapDispatchToProps)(App);
