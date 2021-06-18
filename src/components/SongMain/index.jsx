import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { SongMainStyle } from './style'

import { strFormat, formatTime } from '../../fun'

import { createPlayList, playMusic } from '../../redux/actions/playlist'

const SongMain = (props) => {

    const { songDetail, play_id } = props
    //  音乐列表的分页
    const [offset, setOffset] = useState(0)

    const state = {
        //  音乐列表的导航
        nav: [
            { name: '序号' },
            { name: '歌曲' },
            { name: '歌手' },
            { name: '专辑' },
            { name: '时长' },
        ],

    }

    //  分页更换
    const togglePage = (page) => {
        setOffset(offset => offset + page)
        window.scrollTo(0, 0);
    }

    const allSong = () => {
        props.createPlayList({ playlist: songDetail, ids: strFormat(songDetail, 'id', ' ').split(' ') })
    }
    const aSong = (item) => {
        props.playMusic({ playlist: item,play_id: item.id, isPlay: true })
    }

    return (
        <SongMainStyle>
            <div className="main-header">
                <button className="btn-play" onClick={allSong}>
                    <span className="iconfont icon-icon_play"></span>
                    播放所有
                </button>
                <button className="btn-collect">
                    <span className="iconfont icon-xihuan"></span>
                    收藏
                </button>
                <span className="songcount">{songDetail.length}首音乐</span>
            </div>
            <div className="song-detail">
                <ul className="song-nav-items">
                    {
                        state.nav.map((item, index) => (
                            <li key={index} className="nav-item">
                                <span className="nav-name">
                                    {item.name}
                                </span>
                            </li>
                        ))
                    }
                </ul>
                <ul className="song-items">
                    {
                        songDetail.slice(offset * 30, offset * 30 + 30).map((item, index) => (
                            <li style={{ color: play_id === item.id ? 'red' : '' }} onClick={() => aSong(item)} key={item.id} className="song-item">
                                <span className="song-index">
                                    {play_id === item.id ? '正在播放' : index + 1}
                                </span>
                                <span className="song-name text-line">{item.name}</span>
                                <span className="song-artist text-line">{strFormat(item.ar, 'name', '/')}</span>
                                <span className="song-album text-line">{item.al.name}</span>
                                <span className="song-time text-line">{formatTime(item.dt)}</span>
                            </li>
                        ))
                    }
                </ul>
                <div className="page-items">
                    <span onClick={() => togglePage(-1)} style={{ display: offset === 0 || songDetail.length <= 30 ? 'none' : 'inline' }} className="page-item">上一页</span>
                    <span className="page-index">
                        当前<em>{offset + 1}</em>页,共<em>{Math.ceil(songDetail.length / 30)}</em>页
                    </span>
                    <span onClick={() => togglePage(1)} style={{ display: offset === parseInt(songDetail.length / 30) || songDetail.length <= 30 ? 'none' : 'inline' }} className="page-item">下一页</span>
                </div>
            </div>
        </SongMainStyle>
    );
};

SongMain.propTypes = {
    songDetail: PropTypes.array,
}

export default connect(
    state => ({
        play_id: state.playlist.play_id,
    }), {
    createPlayList,
    playMusic
}
)(SongMain);