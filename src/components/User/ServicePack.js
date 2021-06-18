import React,{useState} from 'react';
import './info.css';
import Grid from '@material-ui/core/Grid';
import Edit from './Edit.png';


const ServicePack = () => {

    const tabledata =
        [{
            id: 123,
            name: 'DV1',
            quantity: 100,
            duration: '2 Tháng',
            price: 1500000,
        },
        {
            id: 321,
            name: 'DV2',
            quantity: 100,
            duration: '2 Tháng',
            price: 1500000,
        }
    ]


    return (
        <div class="container">
            <ul class="info">
                <li>Tên gói dịch vụ đang sử dụng:</li>
                <li>Thời hạn:</li>
            </ul>
            <div class="info" style={{width:'100%'}}>
                <h3 style={{color: 'red', textAlign: 'center'}}>Các gói dịch vụ khác</h3>
                <table style={{width:'100%'}}>
                    <tr>
                        <th>Mã dịch vụ</th>
                        <th>Tên gói</th>
                        <th>Số lượng đơn</th>
                        <th>Thời hạn</th>
                        <th>Giá tiền</th>
                    </tr>
                    {tabledata.map(item => {
                        return (
                        <tr key={item.id}>
                            <th>{item.id}</th>
                            <th>{item.name}</th>
                            <th>{item.quantity}</th>
                            <th>{item.duration}</th>
                            <th>{item.price}</th>
                            <th>**</th>
                        </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    )
}

export default ServicePack;