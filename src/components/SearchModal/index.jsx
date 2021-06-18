import React, { useEffect, useRef, useState } from 'react';
import { withRouter } from 'react-router-dom';

import { SearchModalStyle } from './style'

import Search_bg from './img/Search.jpg'
//  axios模块
import * as http from '../../api/https';


const SearchModal = (props) => {

    //  默认搜索关键字
    const [defaultKey, setDefaultKey] = useState('')
    //  最新热搜
    const [hotKey, setHotKey] = useState([])
    //  创建搜索表单ref
    const searchRef = useRef()

    const { history } = props

    useEffect(() => {
        get_defaultKey()
        get_hotKey()
    }, [])

    //  获得默认搜索关键字
    const get_defaultKey = async () => {
        const { data: res } = await http.getDefaultKey()
        if (res.code === 200) {
            setDefaultKey(res.data.realkeyword)
        }
    }
    //  获得最新热搜
    const get_hotKey = async () => {
        const { data: res } = await http.getHotSearchKey()
        if (res.code === 200) {
            setHotKey([...res.data])
        }
    }

    const stopPropagation = (e) => {
        e.stopPropagation();
    }

    //  搜索跳转传递参数
    const toSearch = (e) => {
        const { value } = searchRef.current
        if (e.keyCode === 13) {
            if (value === '') {
                history.push(`/search?key=${defaultKey}`)
                props.toggleModal(false)
            } else {
                history.push(`/search?key=${value}`)
                searchRef.current.value = ''
                props.toggleModal(false)
            }
        }
    }
    //  热搜tag跳转
    const togglePath = (key) => {
        searchRef.current.value = ''
        history.push(`/search?key=${key.searchWord}`)
        props.toggleModal(false)
    }

    return (
        <SearchModalStyle bg={Search_bg} onClick={stopPropagation} >
            <div className="top">
                <input ref={searchRef} onKeyUp={toSearch} className="to-search" type="text" placeholder={'大家都在搜:' + defaultKey} />
            </div>
            <div className="buttom">
                <h3 className="hot-title">
                    <span className="iconfont icon-hot"></span>
                    <span className="title">热门搜索</span>
                </h3>
                <ul className="hot-search">
                    {
                        hotKey.map((item, index) => (
                            <li onClick={()=>togglePath(item)} key={index} className="hot-item">
                                <span className="hot-name">
                                    {item.searchWord}
                                </span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </SearchModalStyle>
    );
};

export default withRouter(SearchModal);