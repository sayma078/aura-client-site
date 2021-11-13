import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import MoreItems from './Pages/MoreItem/MoreItems/MoreItems';
import Explore from './Pages/Explore/Explore';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider';
import AddProduct from './Pages/AddProduct/AddProduct';
import ManageProduct from './Pages/ManageProduct/ManageProduct';
import ManageOrder from './Pages/ManageOrder/ManageOrder';
import Purches from './Pages/Purches/Purches';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import DashBoardPage from './Pages/DashBoard/DashBoardPage/DashBoardPage';
import Review from './Pages/Review/Review';


function App() {
  return (
    <AuthProvider>
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
          <Route  path="/login">
            <Login></Login>
          </Route>
          <Route  path="/register">
            <Register></Register>
          </Route>
          
          <Route  path="/moreItems">
            <MoreItems></MoreItems>
          </Route>
          <PrivateRoute path="/explore/:id">
            <Explore></Explore>
          </PrivateRoute>
          <Route path="/addProduct">
            <AddProduct></AddProduct>
          </Route>
          <Route path="/manageProduct">
            <ManageProduct></ManageProduct>
          </Route>
          <Route path="/orders">
            <ManageOrder></ManageOrder>
          </Route>
          <PrivateRoute path="/dashboard">
            <DashBoardPage></DashBoardPage>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/purches/:id">
            <Purches></Purches>
          </PrivateRoute>
          <Route path="*">
              <NotFound></NotFound>
            </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
    </AuthProvider>
  );
}

export default App;
