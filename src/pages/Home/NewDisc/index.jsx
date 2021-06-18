import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
//  图片模块
import disc from './img/disc.png'
//  样式模块
import { NewDiscStyle } from './style'

//  组件
import CatBtnGroup from '../../../components/CatBtnGrop';
import Loading from '../../../components/Loading';
//  axios模块
import * as http from '../../../api/https';


const NewDisc = (props) => {

    //  新碟上架的数据
    const [newDisc, setNewDisc] = useState([])
    //  新碟上架的分类
    const [area, setArea] = useState('ALL')
    //  加载中组件的开关
    const [isLoad, setIsLoad] = useState(true)

    useEffect(() => {
        get_newDisc()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [area])

    const get_newDisc = async () => {
        setIsLoad(true)
        const { data: res } = await http.getNewDisc({
            limit: 9,
            offset: 0,
            area,
            type: 'hot',
        })
        if (res.code === 200) {
            setNewDisc([...res.monthData.splice(0, 9)])
            setIsLoad(false)
        }
    }

    const state = {
        menu: [
            { name: '全部', type: 'ALL' }, { name: '华语', type: 'ZH' }, { name: '欧美', type: 'EA' }, { name: '韩国', type: 'KR' }, { name: '日本', type: 'JP' },
        ]
    }

    const toggleCat = (str) => {
        setArea(str.type)
    }
    //  路由跳转到album详细页
    const toAlbumDetail = (id) => {
        props.history.push(`/playlist/album/${id}`)
        window.scrollTo(0, 0);
    }

    return (
        <NewDiscStyle bg={{ disc }}>
            <h3 className="title">
                新碟上架
            </h3>
            <CatBtnGroup cat={area} toggleCat={toggleCat} menu={state.menu} />
            <ul className="new-disc-items">
                {
                    newDisc.map(item => (
                        <li onClick={() => toAlbumDetail(item.id)} style={{ display: isLoad ? 'none' : 'flex' }} key={item.id} className="new-disc-item">
                            <div className="new-disc-img">
                                <img src={item.picUrl} alt="" className="new-disc-ava" />
                            </div>
                            <div className="new-disc-msg ">
                                <p className="new-disc-name text-line">
                                    {item.name}
                                </p>
                                <p className="new-disc-artist">
                                    {item.artists.map(name => (
                                        `${name.name} `
                                    ))}
                                </p>
                            </div>
                            <div className="new-disc-tag">
                                <span className="tag">
                                    {item.type}
                                </span>
                            </div>
                        </li>
                    ))
                }
                <li style={{ display: isLoad ? 'block' : 'none' }}>
                    <Loading />
                </li>
            </ul>
        </NewDiscStyle>
    );
};

export default withRouter(NewDisc);