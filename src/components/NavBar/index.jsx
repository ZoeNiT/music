import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

//  样式文件
import { NavBarStyle } from './style'

//  图片文件
import logo from './img/logo.ico'
import { connect } from 'react-redux';

const NavBar = (props) => {

    const state = {
        menu: [
            { name: '发现音乐', path: '/home' },
            /*             { name: '排行榜', path: '/rank' },
                        { name: '歌单', path: '/playlist' },
                        { name: '视频', path: '/mvlist' }, */
            { name: '我的博客', path: '/m' },
            { name: '我的简历', path: '/mvlist' },
        ]
    }

    const blog = (index) => {
        if (index === 1) {
            window.open('https://zoeryio.top/')
        }
    }

    return (
        <NavBarStyle>
            <div className="container">
                <div className="logo">
                    <NavLink className="logo-msg" to="/home">
                        <img className="logo-bg" src={logo} alt="Ryio音乐室" />
                        <span className="logo-name">Ryio音乐室</span>
                    </NavLink>
                </div>
                <ul className="menu-items">
                    {
                        state.menu.map((item, index) => (
                            <li key={index} className="menu-item">
                                <NavLink onClick={() => blog(index)} className="menu-name" activeClassName="menu-active" to={item.path}>
                                    {item.name}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
                <div className="btn-group">
                    <span className="iconfont icon-sousuo1"></span>
                    {props.isLogin ? <img src={props.userInfo.avatarUrl} style={{ width: '3rem' }} alt="" /> : <span onClick={() => { props.history.push('/login') }} className="iconfont icon-yonghu"></span>}
                </div>
            </div>
        </NavBarStyle>
    );
};

export default connect(
    state => ({
        isLogin: state.login.isLogin,
        userInfo: state.login.userInfo
    })
)(withRouter(NavBar));