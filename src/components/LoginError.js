import React, {Component} from 'react';
import { useState } from 'react';
import './loginerror.css';
import logo from './img/LogoAlta.png';
import background from './img/Background.png';
import vector from './img/Vector.png';
import redalert from './img/icon/icon-red_alert.png';
import { Link} from 'react-router-dom';

class LoginError extends Component {
    handleClick = (e) =>{
        const [details] = useState({email: "", password: ""});
        e.preventDefault();
        LoginError(details);
        
    }
render(){
    return (
        <div className="login2">
            <div className='container-left2'>
                    <div><img src={logo} alt='Logo' className='logo2'></img></div>
                    <form className='login-form2'>
                    <div>
                        <label>Tên đăng nhập*</label><br />
                        <input className='email2' type="email" placeholder='phat'/><br/>
                    </div>
                    <div>
                        <label>Mật khẩu*</label><br/>
                        <input className='password2' type="password" placeholder='***'></input>
                    </div>
                    <div><img src={vector} alt='Vector' className ='eye-flash2'></img></div>
                    <div>
                        <img src={redalert} alt='Red-alert' className ='warning'></img>
                        <span className=" red-warning">Sai mật khẩu hoặc tên đăng nhập</span>
                    </div>
                    <div>
                        <Link className="text-link4" to="">
                            <button className='btn-login2' onClick={this.handleClick}>Đăng nhập</button>
                        </Link>
                    </div>
                    <div>
                        <Link className="text-link5" to="/forgot">
                            <span className=" forgot-password2">Quên mật khẩu</span>
                        </Link>
                    </div>
                </form>
            </div>
            <div className='container-right2'>
                <img src={background} alt='background'className='background2'></img>
                <div className='container-Text2'>
                    <p className='text11'>Hệ thống</p><br />
                    <div className='text22'>QUẢN LÝ XẾP HÀNG</div>
                </div>
            </div>                
        </div>
    );
    }
}

export default LoginError