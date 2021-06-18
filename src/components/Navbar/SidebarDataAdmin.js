import React from 'react'
import './NavbarAdmin.css';
import h1 from './img/h3.png';
import h2 from './img/quanlikhachhang.png';
import h3 from './img/h2.png';
import h4 from './img/quanlidichvu.png';
import h5 from './img/h6.png';
import h6 from './img/thongke.png';

export const SidebarDataAdmin = [
    {
        title: 'Thông Tin Admin',
        path: '/Admin/information',
        icon: <img className="Edit-icon" src={h1} />,
        cName: 'nav-text'
    },
    {
        title: 'Quản lí khách hàng',
        path: '/Admin/customer-Management',
        icon: <img className="Edit-icon" src={h2} />,
        cName: 'nav-text'
    },
    {
        title: 'Quản lí đơn hàng',
        path: '/Admin/order-Management',
        icon: <img className="Edit-icon" src={h3} />,
        cName: 'nav-text'
    },
    {
        title: 'Quản lí dịch vụ',
        path: '/Admin/servicePack-Management',
        icon: <img className="Edit-icon" src={h4} />,
        cName: 'nav-text'
    },
    {
        title: 'Công ty vận chuyển',
        path: '/Admin/shipping-Company',
        icon: <img className="Edit-icon" src={h5} />,
        cName: 'nav-text'
    },
    {
        title: 'Thống kê',
        path: '/Admin/statistical',
        icon: <img className="Edit-icon" src={h6} />,
        cName: 'nav-text'
    }
]
