import React, {Component} from 'react';
import './forgotpass.css';
import logo from './img/LogoAlta.png';
import frame from './img/Frame.png';

class ForgotPass extends Component {

render(){
    return (
        <div className="forgot-pass">
            <div className='container-left'>
                <div><img src={logo} alt='Logo' className='logo'></img></div>
                <form className='email-form'>
                    <div className='container-text'>
                        <div className='text'>
                            <div className='title'><p>Đặt lại mật khẩu</p></div><br />
                            <div><p className='sentence'>Vui lòng nhập lại mật email đặt lại mật khẩu của bạn*</p></div>
                            <input className='email' type="text"/>
                        </div>
                        <div>
                            <button className='cancel' onClick={() => this.handleClick()}><p>Hủy</p></button>
                            <button className='continue'><p>Tiếp tục</p></button>
                        </div>
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

export default ForgotPass;
