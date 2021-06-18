import styled from 'styled-components'

export const AlbumDetailStyle = styled.div`
    margin: 6rem auto 2rem;
    border-radius: 9px;
    max-width: 1200px;
    padding: 2rem 1rem;
    background-color: #eeeeee61;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    .album-top {
        width: 90%;
        margin: 0 auto 1rem;
        display: flex;
        align-items: center;
        .album-img {
            flex: 1;
            margin-right: 2rem;
            position: relative;
            .album-bg {
                width: 20rem;
                height: 19rem;
                border-radius: 9px;
            }
            &::after {
                content: '';
                position: absolute;
                top: 5%;
                right: .8rem;
                z-index: -1;
                border-radius: 9px;
                width: 90%;
                height: 90%;
                background-color: #d8d8d8;
            }
        }
        .album-info {
            flex: 2;
            .album-title {
                .name {
                    font-size: 1.4rem;
                    font-weight: 600;
                    color: #000;
                }
            }
            .album-about {
                margin: 1rem 0;
                display: flex;
                flex-direction: column;
                .singer,.create,.company {
                    letter-spacing: 1px;
                    .name {
                        padding: .5rem;
                        color: #000;
                    }
                }
            }
            .album-desc {
                .name {
                    margin-bottom: .3rem;
                    color: #000;
                    font-size: 1rem;
                    font-weight: 600;
                    letter-spacing: 1px;
                }
                .desc {
                    font-size: .9rem;
                    color: #999;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 6;
                    -webkit-box-orient: vertical;
                    word-break: break-all;
                    cursor: pointer;
                }
            }
        }
    }
    .album-center {
        width: 90%;
        margin: 2rem auto;
    }
    .album-buttom {
        margin: 2rem auto;
        width: 90%;
        .comment-now {
            margin: 1rem 0;
            .name {
                border-left: .3rem solid #e6720e;
                padding-left: 1rem;
                margin-bottom: .5rem;
                font-size: 1.5rem;
                color: #e6720e;
            }
            .my-comment {
                overflow: hidden;
                width: 100%;
                height: 9rem;
                outline: none;
                border: 1px solid #dcdcdc;
                background-color: #fff0;
                padding: 10px;
                font-size: 1rem;
                letter-spacing: 1px;
                font-weight: 400;
                resize: none;
                color: #333;
                border-radius: 4px;
                white-space: pre-wrap;
                word-wrap: break-word;
            }
            .btn-num {
                margin: .5rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .up-comment {
                    padding: .5rem 1.2rem;
                    border-radius: 3px;
                    background-color: #e6720e;
                    border: 0;
                    color: snow;
                    cursor: pointer;
                }
                .text-num {
                    letter-spacing: 1px;
                }
            }
        }
        .comment-hot {
            margin: 2rem 0 1rem;
            .name {
                border-left: .3rem solid #e6720e;
                padding-left: 1rem;
                margin-bottom: .5rem;
                font-size: 1.5rem;
                color: #e6720e;
                >em {
                    padding-left: 1rem;
                    font-size: .8rem;
                    font-style: normal;
                    color: #888;
                }
            }
            .hot-items {
                .hot-item {
                    border-bottom: 1px solid #dcdcdc;
                    margin: .3rem 0;
                    padding: 0 .3rem;
                    display: flex;
                    align-items: center;
                    .comment-img {
                        .user-ava {
                            width: 5rem;
                            height: 5rem;
                            border-radius: 50%;
                            transform: scale(.5);
                        }
                    }
                    .comment-info {
                        overflow: hidden;
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        font-size: .9rem;
                        color: #888;
                        .user-name {
                        }
                        .content {
                            margin: .3rem 0;
                            color: #333;
                        }
                    }
                }
            }
        }
    }
`