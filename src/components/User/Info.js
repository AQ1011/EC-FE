import React,{useState} from 'react';
import './info.css';
import Grid from '@material-ui/core/Grid';
import Edit from './Edit.png';

const Info =() => {

    const [user, setUser] = useState('User');

    return (
        <div class="container">
            <Grid container justify="space-evenly">
                <Grid item lg={12}>
                    <div class="paper">Hi, {user}</div>
                </Grid>
                <Grid item lg={6} md={12} sm={12}>                    
                    <ul class="info">
                        <li>Họ tên  
                            <img class="icon" src={Edit}/>
                        </li>
                        <li>Giới tính              
                            <img class="icon" src={Edit}/>
                        </li>
                        <li>Email                
                            <img class="icon" src={Edit}/>
                        </li>
                        <li>Địa chỉ                
                            <img class="icon" src={Edit}/>
                        </li>
                        <li>Phone                
                            <img class="icon" src={Edit}/>
                        </li>
                    </ul>   
                </Grid>
                <Grid item lg={6} md={12} sm={12}>    
                    <div>           
                        <a class="btn green" href='#'>Thay đổi mật khẩu</a>
                        <ul class="info">
                            <li>Mật khẩu mới                
                                <img class="icon" src={Edit}/>  
                            </li>
                            <li>Mật khẩu cũ               
                                <img class="icon" src={Edit}/>
                            </li>
                            <li>Nhập lại mật khẩu                
                                <img class="icon" src={Edit}/>
                            </li>
                        </ul>
                    </div>     
                </Grid>
                <Grid item lg={12} md={12} sm={12}>
                    <a class="btn red" href='#' style={{color: 'white'}}>Cập nhật</a>
                </Grid>
            </Grid>            
        </div>
    )
}

export default Info;