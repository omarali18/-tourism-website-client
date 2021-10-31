import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import BookingNow from './components/BookingNow/BookingNow';
import NotFound from './components/NotFound/NotFound';
import MenueBar from './components/MenueBar/MenueBar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <MenueBar />
              <Login />
              <Footer />
            </Route>
            <PrivateRoute path="/bookingnow/:id">
              <MenueBar />
              <BookingNow></BookingNow>
              <Footer />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>



    </div>
  );
}

export default App;
