import React from 'react'
import './Navbar.css';
import h6 from './img/h6.png';
import h2 from './img/h2.png';
import h3 from './img/h3.png';
import h4 from './img/h4.png';
import h1 from './img/h1.png';

export const SidebarData = [
    {
        title: 'Thông Tin',
        path: '/Users/information',
        icon: <img className="Edit-icon" src={h3} />,
        cName: 'nav-text'
    },
    {
        title: 'Lịch sử giao hàng',
        path: '/Users/deliveryHistory',
        icon: <img className="Edit-icon" src={h2} />,
        cName: 'nav-text'
    },
    {
        title: 'Đặt hàng',
        path: '/Users/order',
        icon: <img className="Edit-icon" src={h6} />,
        cName: 'nav-text'
    },
    {
        title: 'Gói dịch vụ',
        path: '/Users/servicePack',
        icon: <img className="Edit-icon" src={h4} />,
        cName: 'nav-text'
    },
    {
        title: 'Lịch sử giao dịch',
        path: '/Users/transactionHistory',
        icon: <img className="Edit-icon" src={h1} />,
        cName: 'nav-text'
    },
    {
        title: 'Đặt giao hàng',
        path: '/Users/order-delivery',
        icon: <img className="Edit-icon" src={h1} />,
        cName: 'nav-text'
    }

]
