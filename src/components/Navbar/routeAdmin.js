import NavbarAdmin from './NavbarAdmin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CustomerManagement from '../../pageAdmin/Customer-Management';
import Information from '../../pageAdmin/Information';
import OrderManagement from '../../pageAdmin/Order-Management';
import ServicePackManagement from '../../pageAdmin/ServicePack-Management';
import ShippingCompany from '../../pageAdmin/Shipping-Company';
import Statistical from '../../pageAdmin/Statistical';
import Chitietdonhang from '../../pageAdmin/Chitietdonhang';
function AppAdmin() {
  return (
    <>
      <Router>
        <NavbarAdmin />
        <Switch>
            <Route path="/Admin/information" exact component={Information} />
            <Route path="/Admin/customer-Management" exact component={CustomerManagement} />
            <Route path="/Admin/order-Management" component={OrderManagement} />
            <Route path="/Admin/servicePack-Management" component={ServicePackManagement} />
            <Route path="/Admin/shipping-Company" component={ShippingCompany} /> 
          <Route path="/Admin/statistical" component={Statistical} />
          <Route path="/Admin/order-Management/chitietdonhang" component={Chitietdonhang} />
        </Switch>
      </Router>
    </>
  );
}
export default AppAdmin;
