import Header from './components/Header';
import JoinNow from './components/Home/JoinNow';
import Spec from './components/Home/Spec';
import HowPortalWork from './components/Home/HowPortalWork';
import Footer from './components/Footer';
import Partner from './components/Home/Partner';
import Login from './components/Login/login';
import Signup from './components/Signup/signup';
import Appp from './components/Navbar/route';
import AppAdmin from './components/Navbar/routeAdmin';
import Home from './components/Home/HowPortalWork';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import Paypal from './components/Paypal';
import React,{useState} from 'react';
import Checkout from './components/Checkout/Checkout'

function App() {

  const [checkOut, setCheckOut] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact render={() => (
          <div>            
            <Header />
            <JoinNow />
            <Spec />
            <HowPortalWork />
            <Partner />            
            <Footer/>
          </div>
        )}>
        </Route>

        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />

        <Route path="/Admin" render={() => (
          <div>         
            <AppAdmin />
          </div>
        )} />

        <Route path="/checkout" component={Checkout} />
        <Route path="/Users" render={() => (
          <div>         
            <Appp />
          </div>
        )} />
    </div>
    </BrowserRouter>
  );
}

export default App;
