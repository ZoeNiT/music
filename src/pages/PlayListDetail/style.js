import styled from 'styled-components'

export const PlayListDetailStyle = styled.div`
    margin: 6rem auto 0;
    max-width: 1200px;
    display: flex;
    .detail-main {
        width: 70%;
        .cover {
            display: flex;
            align-items: center;
            .cover-img {
                width: 30%;
                position: relative;
                .cover-bg {
                    width: 100%;
                    height: 15.5rem;
                    border-radius: 9px;
                    transform: scale(.8);
                    background-color: #fff;
                }
                &::after {
                    position: absolute;
                    top: 0;
                    right: -1.2rem;
                    border-radius: 7px;
                    content: '';
                    background-color: #ccc8c8;
                    width: 100%;
                    height: 100%;
                    transform: scale(.7);
                    z-index: -1;
                }
            }
            .cover-info {
                padding: 1rem;
                width: 70%;
                .cover-name {
                    margin: .3rem 0;
                    font-size: 1.4rem;
                    font-weight: bold;
                    color: #000;
                }
                .cover-author {
                    margin: .3rem 0;
                    display: flex;
                    align-items: center;
                    .ava-img {
                        .author-img {
                            width: 3rem;
                            height: 3rem;
                            border-radius: 50%;
                        }
                    }
                    .author-name {
                        margin-left: 1rem;
                        font-size: .9rem;
                        color: #333;
                    }
                    .create-time {
                        margin-left: 1rem;
                        font-size: .8rem;
                    }
                }
                .cover-tags {
                    margin: .3rem 0;
                    color: #e6720e;
                    font-size: .8rem;
                    letter-spacing: 1px;
                }
                .cover-desc {
                    margin: .3rem 0;
                    .desc-name {
                        padding: .3rem 0;
                        color: #000;
                        font-weight: 600;
                        letter-spacing: 1px;
                    }
                    .desc {
                        font-size: .8rem;
                        color: #999;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 4;
                        -webkit-box-orient: vertical;
                        word-break: break-all;
                        cursor: pointer;
                    }
                }
            }
        }
    }
    .detail-aside {
        width: 30%;
        padding: 1rem 0;
        .enjoy-user {
            margin-top: 1rem;
            .name {
                color: #000;
                padding-left: 1rem;
                border-left: .3rem solid #e6720e;
            }
            .user-items {
                margin-top: 1rem;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                .user-item {
                    width: 12%;
                    margin: .3rem;
                    .user-img {
                        border-radius: 50%;
                        width: 100%;
                    }
                }
            }
        }
        .comments {
            margin-top: 5rem;
            .name {
                color: #000;
                padding-left: 1rem;
                border-left: .3rem solid #e6720e;
            }
            .comment-items {
                margin-top: 1rem;
                .comment-item {
                    padding: .5rem 0;
                    display: flex;
                    align-items: center;
                    .user-img {
                        margin: 0 .5rem;
                        width: 20%;
                        overflow: hidden;
                        .user-ava {
                            width: 3.5rem;
                            height: 3.5rem;
                            border-radius: 50%;
                        }
                    }
                    .comment-cover {
                        width: 80%;
                        text-align: left;
                        overflow: hidden;
                        .user-name {
                            font-size: 1rem;
                            letter-spacing: 1px;
                            font-weight: 600;
                            color: #000;
                            margin-bottom: .3rem;
                        }
                        .content {
                            padding: .3rem;
                            background-color: #eee;
                            font-size: .8rem;
                            color: #999;
                        }
                    }
                }
            }
        }
    }
`