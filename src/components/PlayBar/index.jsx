import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';

import { PlayBarStyle } from './style'

//  axios
import * as http from '../../api/https'

import { stopMusic, changeMusic } from '../../redux/actions/playlist'

const PlayBar = (props) => {

    const { ids, isPlay, playlist, stopMusic, changeMusic } = props
    const [songList, setSongList] = useState([])
    //  音乐url数组的下标
    const [idx, setIdx] = useState(0)
    //  音乐播放的时间

    //  播放状态栏,状态栏锁定,歌单列表和播放音量开关
    const [playFlag, setPlayFlag] = useState(false)
    const [barFlag, setBarFlag] = useState(false)

    const myAudio = useRef()

    useEffect(() => {
        get_songUrl()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ids, idx])

    //  音乐url的ajax数据
    const get_songUrl = async () => {
        const { data: res } = await http.getSongUrl(ids)
        if (res.code === 200) {
            let url = res.data.map(item => {
                return item.url
            })
            let urls = url.filter(item => {
                return item !== null
            })
            setSongList([...urls])
        }
    }

    const playBarState = (flag) => {
        if (!barFlag) {
            setPlayFlag(flag)
        }
        if (flag === false) {

        }
    }

    const chaongSong = (num) => {
        if (num > 0 && idx >= songList.length - 1) {
            alert('到头了')
        } else if (num < 0 && idx <= 0) {
            alert('到头了')
        } else {
            setIdx(idx + (num * 1))
            props.changeMusic({ playlist, ids, play_id: playlist[idx].id })
        }
    }
    const flagSong = () => {
        if (isPlay) {
            myAudio.current.pause()
            props.stopMusic({ playlist, ids, play_id: playlist[idx].id,isPlay:false })
        }else {
            myAudio.current.play()
            props.stopMusic({ playlist, ids, play_id: playlist[idx].id,isPlay:true })
        }
/*         console.log(idx, songList[idx], songList.length); */
    }

    return (
        <PlayBarStyle onMouseLeave={() => playBarState(false)} style={{ bottom: playFlag ? '0' : '-3rem' }}>
            <audio ref={myAudio} style={{ height: 0 }} src={songList[idx]} autoPlay controls></audio>

            <div className="container">
                <div className="row open">
                    <div onClick={() => setBarFlag(!barFlag)} onMouseEnter={() => playBarState(true)} className="lock">
                        <span style={{ color: barFlag ? 'orangered' : '' }} className="iconfont icon-mima"></span>
                    </div>
                </div>
                <div className="row">
                    <div className="center">
                        <div className="control">
                            <span onClick={() => chaongSong(-1)} className="iconfont icon-shangyishou"></span>
                            <span onClick={flagSong} className={isPlay ? 'iconfont icon-zanting' : 'iconfont icon-icon_play'}></span>
                            <span onClick={() => chaongSong(1)} className="iconfont icon-xiayishou"></span>
                        </div>
                    </div>
                </div>
            </div>

        </PlayBarStyle>
    );
};

export default connect(
    state => ({
        playlist: state.playlist.playlist,
        ids: state.playlist.ids,
        isPlay: state.playlist.isPlay
    }), {
    stopMusic,
    changeMusic
}
)(PlayBar);