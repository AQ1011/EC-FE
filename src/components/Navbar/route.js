import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DeliveryHistory from '../../pages/DeliveryHistory'
import Order from '../../pages/Order'
import ServicePack from '../../pages/ServicePack'
import TransactionHistory from '../../pages/TransactionHistory'
import Information from '../../pages/Information'
import OrderDelivery from '../../pages/Checkout/Checkout'
function Appp() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/Users/information" exact component={Information} />
          <Route path="/Users/deliveryHistory" exact component={DeliveryHistory} />
          <Route path="/Users/order" component={Order} />
          <Route path="/Users/servicePack" component={ServicePack} />
          <Route path="/Users/transactionHistory" component={TransactionHistory} />
          <Route path="/Users/order-delivery" component={OrderDelivery} />
        </Switch>
      </Router>
    </>
  );
}
export default Appp;
