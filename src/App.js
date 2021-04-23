import { useState ,useEffect} from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/Shop/ShopPage";
import Header from "./components/header/Header";
import SignPage from "./pages/SignPage/SignPage";
import { auth } from "./firebase/firebase.utils";


function App() {
  const [currentUser, setcurrentUser] = useState(null);

  useEffect(() => {
    let unsubscribe;
    unsubscribe = auth.onAuthStateChanged((user) => {
      setcurrentUser(user);
       console.log(user);
    });
    return function cleanup(){
      unsubscribe();
    }
    
  },[])
  return (
    <div>
      <Header  currentUser={currentUser}  />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/" component={ShopPage} />
        <Route path="/signin/" component={SignPage} />
      </Switch>
    </div>
  );
}

export default App;
