import React, {Component} from 'react';
import { useState } from 'react';
import './login.css';
import logo from './img/LogoAlta.png';
import background from './img/Background.png';
import vector from './img/Vector.png';
import { Link} from 'react-router-dom'

class LoginForm extends Component {
    handleClick = (e) =>{
        const [details] = useState({email: "", password: ""});
        e.preventDefault();
        LoginForm(details);
        
    }
render(){
    return (
        <div className="login">
            <div className='container-left'>
                    <div><img src={logo} alt='Logo' className='logo'></img></div>
                    <form className='login-form'>
                    <div>
                        <label>Tên đăng nhập*</label><br />
                        <input className='email' type="email"/><br/>
                    </div>
                    <div>
                        <label>Mật khẩu*</label><br/>
                        <input className='password' type="password"></input>
                    </div>
                    <div><img src={vector} alt='Vector' className ='eye-flash'></img></div>
                    <div>
                        <button className='btn-login' onClick={this.handleClick}>Đăng nhập</button>
                    </div>
                    <div>
                        {/* <label className='forgot-pass' onClick={this.handleClick}>Quên mật khẩu?</label> */}
                        <Link className="link-tag" to="/forgot">
                            <span className=" forgot-pass">Quên mật khẩu</span>
                        </Link>
                    </div>
                </form>
            </div>
            <div className='container-right'>
                <img src={background} alt='background'className='background'></img>
                <div className='container-text'>
                    <p className='text-1'>Hệ thống</p><br />
                    <div className='text-2'>QUẢN LÝ XẾP HÀNG</div>
                </div>
            </div>                
        </div>
    );
    }
}

export default LoginForm