import React, {Component} from 'react';
import './resetpass.css';
import logo from './img/LogoAlta.png';
import frame from './img/Frame.png';
import vector from './img/Vector.png';

class ResetPass extends Component {
render(){
    return (
        <div className="reset-pass">
            <div className='container-left'>
                    <div><img src={logo} alt='Logo' className='logo'></img></div>
                <form className='reset-form'>
                    <div className='title'><p>Đặt lại mật khẩu mới</p></div>
                    <div>
                        <label>Mật khẩu</label><br/>
                        <input className='password' type="password"></input>
                    </div>
                    <div><img src={vector} alt='Vector' className ='eye-flash-1'></img></div>
                    <div>
                        <label>Nhập lại mật khẩu</label><br />
                        <input className='password-retype' type="password"></input>
                    </div>
                    <div><img src={vector} alt='Vector' className ='eye-flash-2'></img></div>
                    <div>
                        <button className='confirm'>Xác nhận</button>
                    </div>
                </form>
            </div>
            <div className='container-right'>
                <img src={frame} alt='background'></img>
            </div>                
        </div>
    );
    }
}

export default ResetPass;
