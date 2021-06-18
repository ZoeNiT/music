import React, { useEffect, useState } from 'react';

import { PlayListDetailStyle } from './style'

import SongMain from '../../components/SongMain'
//  axios模块
import * as http from '../../api/https';
//  功能函数模块
import { dateFormat } from '../../fun'

const PlayListDetail = (props) => {

    //  歌单的数据存放
    const [detail, setDetail] = useState({
        name: '',
        creator: {},
        createTime: 0,
        tags: [],
        description: '',
        trackCount: 0,
        subscribers: [],

    })
    //  歌单音乐详细的数据存放
    const [songDetail, setSongDetail] = useState([])
    //  歌单相关评论
    const [songComment, setSongComment] = useState([])
    //  歌单音乐的所有id,用于获得详细的音乐描述
    const [ids, setIds] = useState('')

    useEffect(() => {
        get_playListDetail()
        get_songListDetail()
        get_playListComment()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ids])

    //  歌单数据的ajax
    const get_playListDetail = async () => {
        const { data: res } = await http.getPlayListDetail({
            id: props.match.params.id,
            s: 18,
        })
        if (res.code === 200) {
            setDetail(res.playlist)
            let arr = []
            res.playlist.trackIds.forEach(item => {
                arr.push(item.id)
            });
            setIds(`${arr.toString()}`)
        }
    }
    //  歌单音乐列表数据的ajax
    const get_songListDetail = async () => {
        const { data: res } = await http.getSongListDetail(ids)
        if (res.code === 200) {
            setSongDetail([...res.songs])
        }
    }
    //  歌单评论
    const get_playListComment = async () => {
        const { data: res } = await http.getPlayListComment({
            id: props.match.params.id,
            limit: 15,
            offset: 0,
        })
        if (res.code === 200) {
            setSongComment([...res.comments])
        }
    }

    return (
        <PlayListDetailStyle >
            <div className="detail-main">
                <div className="cover">
                    <div className="cover-img">
                        <img src={detail.coverImgUrl} alt="" className="cover-bg" />
                    </div>
                    <div className="cover-info">
                        <h3 className="cover-name text-line">{detail.name}</h3>
                        <div className="cover-author">
                            <div className="ava-img">
                                <img src={detail.creator.avatarUrl} alt="" className="author-img" />
                            </div>
                            <span className="author-name">{detail.creator.nickname}</span>
                            <span className="create-time">{dateFormat(detail.createTime)}</span>
                        </div>
                        <div className="cover-tags">
                            {
                                detail.tags.map(tag => (
                                    `#${tag} `
                                ))
                            }
                        </div>
                        <div className="cover-desc">
                            <h5 className="desc-name">歌单简介</h5>
                            <p className="desc">{detail.description}</p>
                        </div>
                    </div>
                </div>
                <SongMain songDetail={songDetail} />
            </div>

            <div className="detail-aside">
                <div className="enjoy-user">
                    <h4 className="name">喜欢该歌单的用户</h4>
                    <ul className="user-items">
                        {
                            detail.subscribers.map((item,i) => (
                                <li key={i} className="user-item">
                                    <img src={item.avatarUrl} alt="" className="user-img" />
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="comments">
                    <h4 className="name">歌单评论</h4>
                    <ul className="comment-items">
                        {
                            songComment.map((item,i) => (
                                <li key={i} className="comment-item">
                                    <div className="user-img">
                                        <img src={item.user.avatarUrl} alt="" className="user-ava" />
                                    </div>
                                    <div className="comment-cover">
                                        <h4 className="user-name">{item.user.nickname}</h4>
                                        <p className="content text-line">{item.content}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

        </PlayListDetailStyle>
    );
};

export default PlayListDetail;