import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import MoreItems from './Pages/MoreItem/MoreItems/MoreItems';
import Explore from './Pages/Explore/Explore';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/home">
            <Home></Home>
          </Route>
          <Route  path="/moreItems">
            <MoreItems></MoreItems>
          </Route>
          <Route path="/explore/:id">
            <Explore></Explore>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
