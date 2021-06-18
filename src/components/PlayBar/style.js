import styled from 'styled-components'

export const PlayBarStyle = styled.div`
position: fixed;
z-index: 9;
transition: linear .3s all;
left: 0;
width: 100%;
.container {
    background: #fff;
    box-shadow: 0 5px 40px -1px rgb(2 10 18 / 10%);
    .row {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left,.center,.right {
        flex: 1;
    }
    .left {
        display: flex;
        align-items: center;
        .music-img {
            overflow: hidden;
            margin-right: 1rem;
            .music-bg {
                width: 4.5rem;
                height: 4.5rem;
            }
        }
        .music-info {
            margin-right: 1rem;
            flex: 1;
            .msg {
                display: flex;
                align-items: center;
                justify-content: space-between;
                .music-name {
                    color: #333;
                    font-weight: 600;
                }
                .play-time {
                    color: #666;
                }
            }
            .time-bar {
                margin-top: 1rem;
                width: 100%;
                height: .3rem;
                border-radius: 3px;
                background-color: #cac9c9ad;
                position: relative;
                &::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 10%;
                    height: .3rem;
                    background-color: #e6720e;
                }
            }
        }
    }
    .center {
        .control {
            justify-content: center;
            display: flex;
            align-items: center;
            .iconfont {
                font-size: 1.5rem;
                cursor: pointer;
                margin: 0 1rem;
                &:nth-child(2) {
                    font-size: 3rem;
                    color: #e6720e;
                }
            }
        }
    }
    .right {
        .oper {
            justify-content: center;
            display: flex;
            align-items: center;
            .iconfont {
                font-size: 1.5rem;
                cursor: pointer;
            }
            .music-list {
                position: relative;
                .lists {
                    overflow: hidden;
                    position: absolute;
                    background-color: #fff;
                    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                    top: -16.2rem;
                    left: -50%;
                    border-radius: 12px;
                    transform: translate(-50%,-50%);
                    width: 30rem;
                    height: 30rem;
                    padding: 1rem;
                    .list-row {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        .name {
                            font-size: 1.5rem;
                            color: #333;
                            .count {
                                font-size: .7rem;
                                color: #666;
                                margin-left: 1rem;
                                font-style: normal;
                            }
                        }
                        .clear-list {
                            display: flex;
                            align-items: center;
                            color: #333;
                            cursor: pointer;
                            font-size: .9rem;
                            .iconfont {
                                padding-right: .3rem;
                            }
                        }
                    }
                    .list-title {
                        padding: .5rem 0;
                        display: flex;
                        border-bottom: 1px solid #dcdcdc;
                        align-items: center;
                        >span {
                            flex: 1;
                            font-size: .8rem;
                            text-align: center;
                            color: #333;
                        }
                    }
                    .music-items {
                        overflow-y: scroll;
                        margin: .3rem 0;
                        height: 24rem;
                        &::-webkit-scrollbar {display:none}
                        .music-item {
                            border-radius: 3px;
                            display: flex;
                            align-items: center;
                            padding: .5rem 0;
                            cursor: pointer;
                            >span {
                                text-align: center;
                                font-size: .9rem;
                                flex: 1;
                            }
                            &:hover {
                                background-color: #e2e2e2;
                            }
                        }
                    }
                }
            }
            .voice {
                position: relative;
                margin: 0 1rem;
                .voice-bar {
                    display: flex;
                    align-items: center;
                    position: absolute;
                    top: -7.5rem;
                    left: -50%;
                    width: 3rem;
                    background-color: #eee;
                    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
                    height: 7rem;
                    border-radius: 3px;
                    &::after {
                        content: '';
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        cursor: pointer;
                        border-radius: 9px;
                        width: .7rem;
                        height: 80%;
                        transform: translate(-50%,-50%);
                        background-color: #cac9c9ad;
                    }
                    .btn-dot {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        cursor: pointer;
                        border-radius: 9px;
                        transform: translate(-50%,-50%);
                        width: .7rem;
                        height: 80%;
                        background-color: #e6720e;
                    }
                }
            }
        }
    }
}
.open {
    position: relative;
    .lock {
        position: absolute;
        z-index: 3;
        bottom: 0;
        right: 1rem;
        cursor: pointer;
        .iconfont {
            text-align: center;
            display: block;
            width: 3rem;
            height: 2rem;
            line-height: 2rem;
            border-radius: 12px 12px 0 0;
            background-color: #fff;
        }
    }
}
}
`
