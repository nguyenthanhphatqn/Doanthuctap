import React from 'react';
import { useState } from 'react';

function LoginForm({Login, error}) {
    const [details, setDetails] = useState({email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='form-inner'>
                <img src='./img/LogoAlta.png' alt='' className='img-logo'></img>
                <div className='logo'>
                    <div className='container'>
                    <div className='form-group'>
                    <label className='email' htmlFor='email'>Tên đăng nhập* <br/></label>
                    <input className='IPemail' type="email" name='email' id='email'  onChange={e => setDetails({...details, email: e.target.value})} value={details.email}></input>
                </div>
                <div className='form-group'>
                    <label className='password' htmlFor='password'>Mật khẩu* <br/></label>
                    <input className='IPpassword' type="password" name='password' id='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <div>
                <input className='btnLogin' type="submit" value="Đăng nhập" />
                </div>
                <div className='forgot'>
                    Quên mật khẩu
                </div>
                {(error != "") ? (<div className='error'>{error}</div>) : ""}
                    </div>
                </div>
            </div>
        </form>
    )
}

export default LoginForm