import React, { useState, useEffect } from 'react';

import { AlbumDetailStyle } from './style'

import SongMain from '../../components/SongMain'
//  axios模块
import * as http from '../../api/https';
//  功能函数模块
import { dateFormat,timestampToTime, strFormat } from '../../fun'

const AlbumDetail = (props) => {

    //  歌单的数据存放
    const [detail, setDetail] = useState({
        songs: [],
        album: {
            artists: []
        },
    })
    //  热门评论数据存放
    const [hotComment, setHotComment] = useState([])


    useEffect(() => {
        get_albumListDetail()
        get_albumComment()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    //  获得专辑的相关信息
    const get_albumListDetail = async () => {
        const { data: res } = await http.getAlbumListDetail(props.match.params.id)
        if (res.code === 200) {
            setDetail({ songs: [...res.songs], album: { ...res.album } })
        }
    }
    //  获得热门评论的相关信息
    const get_albumComment = async () => {
        const { data: res } = await http.getAlbumComment({
            id: props.match.params.id,
            limit: 30,
            offset: 0,
        })
        if (res.code === 200) {
            setHotComment([...res.hotComments])
        }
        
    }

    return (
        <AlbumDetailStyle>
            <div className="album-top">
                <div className="album-img">
                    <img src={detail.album.picUrl} alt="" className="album-bg" />
                </div>
                <div className="album-info">
                    <div className="album-title">
                        <h3 className="name">{detail.album.name}</h3>
                    </div>
                    <div className="album-about">
                        <span className="singer">
                            <span className="name">歌手:</span>
                            {strFormat(detail.album.artists, 'name')}
                        </span>
                        <span className="create">
                            <span className="name">发行时间:</span>
                            {dateFormat(detail.album.publishTime)}
                        </span>
                        <span className="company">
                            <span className="name">发行公司:</span>
                            {detail.album.company}
                        </span>
                    </div>
                    <div className="album-desc">
                        <h5 className="name">歌单简介</h5>
                        <p className="desc">
                            {detail.album.description}
                        </p>
                    </div>
                </div>
            </div>
            <div className="album-center">
                <SongMain songDetail={detail.songs} />
            </div>
            <div className="album-buttom">
                <div className="comment-now">
                    <h2 className="name">
                        评论
                    </h2>
                    <textarea className="my-comment" placeholder="快来加入评论吧...">

                    </textarea>
                    <div className="btn-num">
                        <button className="up-comment">发送</button>
                        <span className="text-num">0/150</span>
                    </div>
                </div>
                <div className="comment-hot">
                    <h2 className="name">
                        最新热评
                        <em className="count">{hotComment.length}条热评</em>
                    </h2>
                    <ul className="hot-items">
                        {
                            hotComment.map(item => (
                                <li key={item.commentId} className="hot-item">
                                    <div className="comment-img">
                                        <img src={item.user.avatarUrl} alt="" className="user-ava" />
                                    </div>
                                    <div className="comment-info">
                                        <span className="user-name">{item.user.nickname}说:</span>
                                        <span className="content text-line">{item.content}</span>
                                        <span className="time">{timestampToTime(item.time)}</span>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </AlbumDetailStyle>
    );
};

export default AlbumDetail;