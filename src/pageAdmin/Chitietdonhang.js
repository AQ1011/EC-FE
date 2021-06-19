import React from 'react';
import './PageAdmincss/chitietdonhang.css';
import hello from '../components/Navbar/img/hello.jpg';
import Button from '@material-ui/core/Button';
function ShippingCompany(){
    return (
        <div>
            <Button className="btn-back" variant="contained" color="secondary">
                back
            </Button>
            <div className="main-chitiet__containerr">
                <div className="main-chitiet__cards">
                    <div className="card-chitiet">
                        <p className="user-detail">NGƯỜI GỬI</p>
                        <div className="card-chitiet_inner">
                            <p className="text-chitiet-primary-p">Mai thuyên</p>
                            <div className="diachi">
                                <h5>Địa chỉ: </h5>
                                <h5>Xuân lộc-đồng nai</h5>
                            </div>
                            <div className="diachi">
                                <h5>Điện thoại: </h5>
                                <h5>09746578</h5>
                            </div>
                        </div>
                    </div>
                    <div className="card-chitiet">
                        <p className="user-detail">ĐƠN VỊ VẬN CHUYỂN</p>
                        <div className="card-chitiet_inner">
                            <p className="text-chitiet-primary">Grap</p>
                            
                        </div>
                    </div>
                    <div className="card-chitiet">
                        <p className="user-detail">NGƯỜI NHẬN</p>
                        <div className="card-chitiet_inner">
                            <p className="text-chitiet-primary-p">Hông Ân</p>
                            <div className="diachi">
                                <h5>Địa chỉ: </h5>
                                <h5>Quận 1-TPHCM</h5>
                            </div>
                            <div className="diachi">
                                <h5>Điện thoại: </h5>
                                <h5>08659898</h5>
                            </div>
                        </div>
                    </div>
                    <div className="card-chitiet">
                        <p className="user-detail">TỔNG TIỀN HÓA ĐƠN</p>
                        <div className="card-chitiet_inner">
                            <p className="text-chitiet-primary-money">125000</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cart-sanpham-td">
                <ul className="cart-sanpham-list-td">
                    <li className='cart-sanpham-item-td' >
                        <p>HÌNH ẢNH</p>
                    </li>
                    <li className='cart-sanpham-item-td'>
                        <p>TÊN SẢN PHẨM</p>
                    </li>
                    <li className='cart-sanpham-item-td'>
                        <p>SỐ LƯỢNG</p>
                    </li>
                    <li className='cart-sanpham-item-td'>
                        <p>GIÁ TIỀN</p>
                    </li>
                    <li className='cart-sanpham-item-td'>
                        <p>TỔNG</p>
                    </li>
                </ul>
            </div>
            
            <div className="cart-sanpham">
                <ul className="cart-sanpham-list">
                    <li className='cart-sanpham-item' >
                        <img src={hello} />
                    </li>
                    <li className='cart-sanpham-item'>
                        <p>mật ong</p>
                    </li>
                    <li className='cart-sanpham-item'>
                        <p>1</p>
                    </li>
                    <li className='cart-sanpham-item'>
                        <p>125000</p>
                    </li>
                    <li className='cart-sanpham-item'>
                        <p>125000</p>
                    </li>
                </ul>
                <hr />
                <ul className="cart-sanpham-list">
                    <li className='cart-sanpham-item' >
                        <img src={hello} />
                    </li>
                    <li className='cart-sanpham-item'>
                        <p>mật ong</p>
                    </li>
                    <li className='cart-sanpham-item'>
                        <p>1</p>
                    </li>
                    <li className='cart-sanpham-item'>
                        <p>125000</p>
                    </li>
                    <li className='cart-sanpham-item'>
                        <p>125000</p>
                    </li>
                </ul>
                <hr />
            </div>
            
        </div>
    );
}
export default ShippingCompany;
