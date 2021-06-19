import React from "react";
import './PageAdmincss/orderManagement.css';
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { Route, BrowserRouter, Switch, Link } from "react-router-dom";
import Dangxacnhan from "./Tabs/Dangxacnhan";
import Daxacnhan from "./Tabs/Daxacnhan";
import Danggiao from "./Tabs/Danggiao";
import Hoanthanh from "./Tabs/Hoanthanh"; 

export default function ShippingCompany() {
    const routes = ["/Admin/order-Management/dangxacnhan", "/Admin/order-Management/daxacnhan","/Admin/order-Management/danggiao", "/Admin/order-Management/hoanthanh"
                    ];
  return (
    <div className="route-status">
      <BrowserRouter>
        <Route
          path="/"
          render={(history) => (
            <AppBar>
              <Tabs
                value={
                  history.location.pathname !== "/"
                    ? history.location.pathname
                    : false
                }
              >
                {console.log(history.location.pathname)}
                <Tab
                  value={routes[0]}
                  label="Đang xác nhận"
                  component={Link}
                  to={routes[0]}
                />
                <Tab
                  value={routes[1]}
                  label="Đã xác nhận"
                  component={Link}
                  to={routes[1]}
                      />
                      <Tab
                  value={routes[2]}
                  label="Đang giao"
                  component={Link}
                  to={routes[2]}
                      />
                      <Tab
                  value={routes[3]}
                  label="Hoàn thành"
                  component={Link}
                  to={routes[3]}
                      />
                      
              </Tabs>
            </AppBar>
          )}
        />

        <Switch>
            <Route path="/Admin/order-Management/dangxacnhan" component={Dangxacnhan} />
            <Route path="/Admin/order-Management/daxacnhan" component={Daxacnhan} />
            <Route path="/Admin/order-Management/danggiao" component={Danggiao} />
            <Route path="/Admin/order-Management/hoanthanh" component={Hoanthanh} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
