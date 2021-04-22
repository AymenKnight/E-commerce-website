import './App.css';
import HomePage from './pages/homepage/homepage';
import {Switch,Route} from "react-router-dom"
import ShopPage from './pages/Shop/ShopPage';
import Header from './components/header/Header';
import SignPage from './pages/SignPage/SignPage';



function App() {
  return (
    <div>
    <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/" component={ShopPage} />
        <Route  path="/signin/" component={SignPage} />
      </Switch>
    </div>
  );
}

export default App;
