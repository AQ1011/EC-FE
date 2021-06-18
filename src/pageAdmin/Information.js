import React from 'react';
import admin from '../components/Navbar/img/admin.png';
import facebook from '../components/Navbar/img/facebook.png';
import ins from '../components/Navbar/img/instagram.png';
import tw from '../components/Navbar/img/twitter.png';
import './PageAdmincss/information.css';
function Information(){
    return (
            <div class="containerr emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src={admin} alt=""/>
                            <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4">
                        <div class="profile-head">
                                    <h5>
                                        Admin
                                    </h5>
                                    <h6>
                                        
                                    </h6>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a className="nav-link active">Thông tin</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work">
                            <p>Mạng xã hội</p>
                            <ul className="social-Network">
                                <li className='social-Network-icon'>
                                    <img src={facebook} />
                                </li>
                                <li className='social-Network-icon'>
                                    <img src={ins} />
                                </li>
                                <li className='social-Network-icon'>
                                    <img src={tw} />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Giới tính</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>Nữ</p>
                                    </div>
                                </div>
                                <hr className='gachngang' />
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Name</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>Admin</p>
                                    </div>
                                </div>
                                <hr className='gachngang' />
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Email</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>Admin@gmail.com</p>
                                    </div>
                                </div>
                                <hr className='gachngang' />
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Phone</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>123 456 7890</p>
                                    </div>
                                </div>
                                <hr className='gachngang' />
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Adress</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>Quận 10-TPHCM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>           
        </div>
    );
}
export default Information;
