import React, { useEffect, useState } from 'react';

import { SwiperStyle } from './style'

//  axios模块
import * as http from '../../../api/https';

const Swiper = () => {
    //  轮播图数据
    const [banner, setBanner] = useState([])
    //  轮播图计数
    const [banner_num, setBanner_num] = useState(0)

    useEffect(() => {
        let timer = setTimeout(() => {
            if (banner_num >= banner.length - 1) {
                setBanner_num(0)
            } else if (banner_num < 0) {
                setBanner_num(banner.length - 1)
            } else {
                setBanner_num(banner_num => banner_num + 1)
            }
        }, 5000)
        return () => {
            clearTimeout(timer)
        }
    }, [banner_num, banner.length])

    useEffect(() => {
        get_banner()
    }, [])

    //  获得轮播图的数据
    const get_banner = async () => {
        const { data: res } = await http.getBanner()
        if (res.code === 200) {
            setBanner([...res.banners])
        }
    }
    //  切换轮播图序号
    const toggleIndex = (i) => {
        setBanner_num(i)
    }
    //  
    const descIndex = () => {
        if (banner_num <= 0) {
            setBanner_num(banner.length - 1)
        } else {
            setBanner_num(banner_num => banner_num -= 1)
        }
    }
    const incrIndex = () => {
        if (banner_num >= banner.length - 1) {
            setBanner_num(0)
        } else {
            setBanner_num(banner_num => banner_num += 1)
        }
    }

    return (
        <SwiperStyle>
            <ul className="banners-items">
                {
                    banner.map((item, i) => (
                        <li key={i} style={{ opacity: banner_num === i ? 1 : 0 }} className="banners-item">
                            <img src={item.imageUrl} alt="" className="banners-img" />
                        </li>
                    ))
                }
            </ul>
            <div onClick={descIndex} className="left-btn">
                <span className="iconfont icon-zuobian"></span>
            </div>
            <div onClick={incrIndex} className="right-btn">
                <span className="iconfont icon-youbian"></span>
            </div>
            <ul className="dot-items">
                {
                    banner.map((item, i) => (
                        <li onClick={() => { toggleIndex(i) }} key={i} style={{ backgroundColor: banner_num === i ? '#e6720e' : '' }} className="dot-item">
                        </li>
                    ))
                }
            </ul>
        </SwiperStyle>
    );
};

export default Swiper;