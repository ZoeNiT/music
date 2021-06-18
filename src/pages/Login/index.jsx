import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import { LoginStyle } from './style'

import main from './img/main.jpg'
import login from './img/login.jpg'

import { saveUserInfo } from '../../redux/actions/login'

//  axios
import * as http from '../../api/https'
import { useEffect } from 'react';


const Login = (props) => {

    //  手机号,验证状态,手机号验证提示
    const [phone, setPhone] = useState('')
    const [phoneFlag, setPhoneFlag] = useState(null)
    const [phoneTips, setPhoneTips] = useState('')
    //  密码,验证状态,密码验证提示
    const [password, setPassword] = useState('')
    const [passwordFlag, setPasswordFlag] = useState(null)
    const [passwordTips, setPasswordTips] = useState('')

    useEffect(()=>{
        if(props.isLogin){
            props.history.replace('/home')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    //  登入发送函数
    const get_login = async () => {
        try {
            const { data: res } = await http.postLogin(phone, password)
            if (res.code === 200) {
                props.saveUserInfo(res)
                localStorage.setItem('userInfo', JSON.stringify(res.profile))
                localStorage.setItem('isLogin', JSON.stringify(true))
                localStorage.setItem('token', JSON.stringify(res.token))
                props.history.replace('/home')
            }
            if (res.code === 502) {
                setPasswordFlag(false)
                setPasswordTips(res.msg)




            }

        } catch (error) {
            setPhoneFlag(false)
            setPhoneTips('账户不存在')
            console.log(error);
        }
    }
    //  登入按钮的操作
    const isLogin = () => {
        if (phoneFlag && passwordFlag) {
            get_login()
        }
    }
    //  表单的数据收集和验证
    const set_phone = (e) => {
        const { value } = e.target
        if (!(/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/).test(value)) {
            setPhone(value)
            setPhoneFlag(false)
            if (value === '') {
                setPhoneTips('')
            } else {
                setPhoneTips('请输入1-11位手机号')
            }
        } else {
            setPhone(value)
            setPhoneFlag(true)
            setPhoneTips('验证成功!')
        }
    }
    const set_password = (e) => {
        const { value } = e.target
        if (!(/^[a-zA-Z]\w{5,17}$/).test(value)) {
            setPassword(value)
            setPasswordFlag(false)
            if (value === '') {
                setPasswordTips('')
            } else {
                setPasswordTips('请输入以字母开头，长度在6~18之间，只能包含字母、数字和下划线')
            }
        } else {
            setPassword(value)
            setPasswordFlag(true)
            setPasswordTips('验证成功!')
        }
    }

    return (
        <LoginStyle bg={{ login, main }}>
            <h3 className="day-title text-line">
                本api由网易云音乐提供,登入请使用网易云账户
            </h3>
            <div className="login-form">
                <div className="account">
                    <input type="text" className="account-v" value={phone} onChange={set_phone} placeholder="请输入网易云手机账户" />
                    <p style={{ color: phoneFlag ? 'green' : 'red' }} className="tips">{phoneTips}</p>
                </div>
                <div className="password">
                    <input type="password" className="password-v" value={password} onChange={set_password} placeholder="请输入密码" />
                    <p style={{ color: passwordFlag ? 'green' : 'red' }} className="tips">{passwordTips}</p>
                </div>
                <div className="login-in">
                    <button onClick={() => isLogin()} className="login">登入</button>
                </div>
            </div>
        </LoginStyle>
    );
};

export default connect(state => ({
    isLogin: state.login.isLogin
}), {
    saveUserInfo
})(withRouter(Login))