import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import { RescSongStyle } from './style'

//  组件模块
import Loading from '../../../components/Loading';
import CatBtnGroup from '../../../components/CatBtnGrop';

//  axios模块
import * as http from '../../../api/https';

//  js功能模块
import { numFormat } from '../../../fun';


const RescSong = (props) => {

    //  精品歌单的数据
    const [recoSong, setRecoSong] = useState([])
    //  精品歌单的分类
    const [cat, setCat] = useState('全部')
    //  加载中组件的开关
    const [isLoad, setIsLoad] = useState(true)

    const state = {
        menu: [
            { name: '全部' }, { name: '华语' }, { name: '古风' }, { name: '欧美' }, { name: '流行' },
        ]
    }

    useEffect(() => {
        get_recoSong()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cat])

    const get_recoSong = async () => {
        setIsLoad(true)
        const { data: res } = await http.getRecoSong({
            cat,
        })
        if (res.code === 200) {
            setRecoSong([...res.playlists])
            setIsLoad(false)
        }
    }

    const toggleCat = (str) => {
        setCat(str.name)
    }

    const toDetail = (id) => {
        props.history.push(`/playlist/song/${id}`)
        window.scrollTo(0, 0);
    }

    return (
        <RescSongStyle>
            <h3 className="title">
                精品歌单
            </h3>
            <CatBtnGroup cat={cat} toggleCat={toggleCat} menu={state.menu} />
            <ul className="reco-items">
                {
                    recoSong.map(item => (
                        <li onClick={() => toDetail(item.id)} style={{ display: isLoad ? 'none' : 'block' }} key={item.id} className="reco-item">
                            <div className="reco-top">
                                <img src={item.coverImgUrl} alt="" className="reco-img" />
                                <span className="playcount">
                                    <span className="iconfont icon-V"></span>
                                    <span className="count">{numFormat(item.playCount)}</span>
                                </span>
                            </div>
                            <div className="reco-buttom">
                                <p className="reco-name">
                                    {item.name}
                                </p>
                                <p className="reco-tags">
                                    {item.tags.map(tag => (
                                        '#' + tag + ' '
                                    ))}
                                </p>
                            </div>
                        </li>
                    ))
                }
                <li style={{ display: isLoad ? 'block' : 'none' }}>
                    <Loading />
                </li>
            </ul>
        </RescSongStyle>
    );
};

export default withRouter(RescSong);