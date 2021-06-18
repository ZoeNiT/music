import styled from 'styled-components'

export const SongMainStyle = styled.div`
            margin-top: 1.2rem;
            .main-header {
                .btn-play,.btn-collect {
                    font-size: .7rem;
                    border-radius: 1.2rem;
                    border: 0;
                    cursor: pointer;
                    padding: .7rem 1rem;
                    margin-left: 1rem;
                    .iconfont {
                        font-size: .7rem;
                        margin-right: .3rem;
                    }
                }
                .btn-play {
                    background-color: #ffa500bf;
                    .iconfont {
                        color: orangered;
                    }
                }
                .btn-collect {
                    background-color: #eee;
                }
                .songcount {
                    padding-left: 2rem;
                    font-size: .7rem;
                    line-height: 1rem;
                    font-style: normal;
                    font-weight: normal;
                    color: #666;
                    vertical-align: baseline;
                }
            }
            .song-detail {
                margin-top: 2rem;
                .song-nav-items {
                    display: flex;
                    align-items: center;
                    margin: 0 1rem;
                    border-radius: 9px 9px 0 0;
                    background-color: #f5f5f5;
                    .nav-item {
                        text-align: center;
                        flex: 1;
                        padding: .5rem 0;
                        font-size: .8rem;
                        color: #000;
                    }
                }
                .song-items {
                    margin: 0 1rem;
                    .song-item {
                        user-select: none;
                        cursor: pointer;
                        background-color: #f1f1f166;
                        padding: .6rem 0;
                        display: flex;
                        align-items: center;
                        >span {
                            font-size: .8rem;
                            flex: 1;
                            text-align: center;
                        }
                        .song-index {
                            font-size: .9rem;
                        }
                        &:nth-child(2n-1) {
                            background-color: #fff;
                        }
                        &:hover {
                            background-color: #d4d4d499;
                            color: #e6720e;
                        }
                    }
                }
                .page-items {
                    padding: 1rem 0;
                    margin-bottom: 2rem;
                    text-align: center;
                    .page-item {
                        cursor: pointer;
                        margin: 0 1rem;
                        padding: .5rem .9rem;
                        border-radius: 3px;
                        background-color: #ffa50073;
                    }
                    .page-index {
                        font-size: .8rem;
                        >em {
                            display: inline-block;
                            width: 1rem;
                            height: 1rem;
                            font-style: normal;
                        }
                    }
                }
            }
`