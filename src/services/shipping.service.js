import axios from 'axios';
import authHeader from './auth-header';
import AuthService from "../services/auth.service";

const API_URL = "https://backend-ec18a007.herokuapp.com/shipping/";

class ShippingService {
    createShippingCustomer(NguoiGui, TenNguoiNhan, SdtNguoiNhan, 
        NoiNhanHang, NoiGiaoHang, ChiPhi, KhoiLuong, TenLoaiHang) {
            return axios.
            post(API_URL + "createShippingCustomer",{
                NguoiGui: NguoiGui,
                TenNguoiNhan: TenNguoiNhan,
                SdtNguoiNhan: SdtNguoiNhan,
                NoiNhanHang: NoiNhanHang,
                NoiGiaoHang: NoiGiaoHang,
                ChiPhi: ChiPhi,
                KhoiLuong: KhoiLuong,
                TenLoaiHang: TenLoaiHang
            },{
                headers: authHeader()
            })
            .then(response => {  
                return response.data;
              })
              .catch(error => {        
                const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
                alert(resMessage);
              });
    }
}

export default new ShippingService();