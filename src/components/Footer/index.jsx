/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

//  css模块
import { FooterStyle } from './style';

const Footer = () => {
    return (
        <FooterStyle>
            <div className="link">
                <span className="text">欢迎来访我的音乐室,还有博客可以评论一下哦!</span>
                <a target="_blank" href="https://zoeryio.top/">
                    ZoeRyio.top
                </a>
            </div>
        </FooterStyle>
    );
};

export default Footer;