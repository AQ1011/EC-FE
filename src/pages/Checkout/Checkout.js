import React, {useState, useEffect, useRef} from 'react';

import Container from '@material-ui/core/Container';

import './Checkout.css'
import photo from './photo.png'
import Paypal from '../../components/Paypal'

import AuthService from "../../services/auth.service";
import AdminService from "../../services/admin.service";
import PackageService from "../../services/package.service";

const Checkout = () => {

    const [loaded, setLoaded] = useState(false);
    const [tong, setTong] = useState(0);
    const nguoiGui = AuthService.getCurrentUser();
    const [nguoiNhan, setNguoiNha] = useState('');
    const [sdt, setSdt] = useState(0);
    const [noiNhanHang, setNoiNhanHang] = useState('');
    const [noiGiaoHang, setnoiGiaoHang] = useState('');
    const [chiPhi, setChiPhi] = useState(0);
    const [khoiLuong, setKhoiLuong] = useState(0);
    const [tenLoaiHang, setTenLoaiHang] = useState('');
  
    const [u, setU] = useState({});
    const user =  AuthService.getCurrentUser();
    useEffect(() => {
        AdminService.getUser(user.id).
        then((usr) => {
            console.log(usr.data.fullName)
            setU(usr.data)
        });
    },[])

    const [kg, setKg] = useState(0);
    useEffect(() => {
        if(kg<0){
            setKg(0);
        }
    })
    function limit(e) {
        if(e.target.value<0)
        { 
            e.target.value = 0;
            e.preventDefault();
            return;
        }
        if(e.target.value>1000)
        { 
            e.target.value = 0;
            e.preventDefault();
            return;
        }
    }

    function confirm() {
        alert("Tổng tiền: " + tong);
        
    }

    return (
        <div class="bg">
            <Container maxWidth="md">
            <div class="lay-hang bred">
                <h5 style={{color: '#DC143C'}}>Địa chỉ lấy hàng</h5>
                <br/>
                <div class="info" style={{paddingLeft: '3em'}}>
                    <div class="input">{u.fullName}</div> 
                    <div class="input">{u.phone}</div> 
                    <div class="input">{u.address}</div> 
                    <a href="#">Thay đổi</a>
                </div>
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
                        <input type="number" placeholder="Khối lượng(kg)" class="input" onChange={(e) => limit(e)}></input>
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
                    <div class="line-detail"><p>Tổng thanh toán</p> <p>{tong} VND</p></div>
                    <button class="btn-confirm" onClick={confirm}>Xác nhận</button>
                </div>
            </div>
            </Container>
        </div>
    )
}

export default Checkout;