import React, {useState} from 'react';

import Container from '@material-ui/core/Container';

import './Checkout.css'
import photo from './photo.png'
import Paypal from '.././Paypal'

const Checkout = () => {


    return (
        <div class="bg">
            <Container maxWidth="md">
            <div class="lay-hang bred">
                <h5 style={{color: '#DC143C'}}>Địa chỉ lấy hàng</h5>
                <br/>
                <div class="info"><bold>Name</bold> <p>SDT</p> <p>DiaChi</p> <a href="#">Thay đổi</a></div>
            </div>
            <div class="nhan-hang bred">
                <h5 style={{color: '#DC143C'}}>Địa chỉ nhận hàng</h5>
                <br/>
                <div class="info" >
                    <div class="info" style={{width: '100%'}}>
                    <input placeholder="Họ tên"></input>
                    <input placeholder="Số nhà, đường"></input>
                    <input placeholder="Quận/Huyện"></input>
                    </div>
                    <br/>
                    <div class="info" style={{width: '100%'}}>
                    <input placeholder="Số điện thoại"></input>
                    <input placeholder="Phường/Xã"></input>
                    <input placeholder="Tỉnh/Thành phố"></input>
                    </div>
                </div>
            </div>
            <div class="thong-tin-hang bred">
                <h5 style={{color: '#DC143C'}}>Thông tin sản phẩm</h5>
                <br/>
                <div class="info" >
                    <div>
                        <img class="photo" src={photo} alt="Ảnh hàng vận chuyển"/>
                    </div>
                    <div class="mota">
                        <textarea placeholder="Mô tả" class="input" rows="6"></textarea>
                        <br/>
                        <input type="number" placeholder="Khối lượng(kg)" class="input"></input>
                    </div>
                    <div class="mota">
                        <textarea placeholder="Ghi chú" class="input" rows="6"></textarea>
                        <br/>
                        <input placeholder="Loại hàng" class="input"></input>
                    </div>
                </div>
            </div>
            <div class="khuyen-mai bred">
                <div class="info-price">
                    <div class="pay">
                        <h5 style={{color: '#DC143C'}}>Gói khuyến mãi</h5>
                        <div class="details">
                            <h4>GOI1</h4>
                            <p class="smol-text">Bạn còn lại ... lần sử dụng</p>
                        </div>
                    </div>
                    {/* <div class="divider"></div> */}
                    <div class="pay">                    
                        <h5 style={{color: '#DC143C'}}>Đơn vị vận chuyển</h5>
                        <div class="details">
                            <h4>GRAB</h4>
                            <a class="smol-text" href="#">Thay đổi</a>
                        </div>
                        <h5>20.000 VND</h5>
                    </div>
                </div>
            </div>
            <div class="bred flex-end">
                <div class="confirm">
                    <div class="line-detail"><p>Phí vận chuyển</p> <p>20.000 VND</p></div>
                    <div class="line-detail"><p>Giảm giá</p> <p>20.000 VND</p></div>
                    <div class="line-detail"><p>Tổng thanh toán</p> <p>0 VND</p></div>
                    <button class="btn-confirm">Xác nhận</button>
                    <Paypal/>
                </div>
            </div>
            </Container>
        </div>
    )
}

export default Checkout;