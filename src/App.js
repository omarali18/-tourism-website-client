import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import BookingNow from './components/BookingNow/BookingNow';
import NotFound from './components/NotFound/NotFound';
import MenueBar from './components/MenueBar/MenueBar';
import Footer from './components/Footer/Footer';
// import Login from './components/Login/Login';


function App() {
  return (
    <div>
      <Router>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/bookingnow">
            <MenueBar />
            <BookingNow />
            <Footer />
          </Route>
          {/* <Route to="/login">
            <Login />
          </Route> */}
          <Route to="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
