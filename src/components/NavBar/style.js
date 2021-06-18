import styled from 'styled-components'

export const NavBarStyle = styled.div`
padding: 1rem 0;
background-color: #fff;
position: fixed;
top: 0;
left: 0;
width: 100%;
z-index: 9;
box-shadow: 0 2px 10px 0 rgb(52 52 52 / 10%);
    .container {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        .logo-msg {
            display: flex;
            align-items: center;
            .logo-bg {
                width: 3rem;
                margin-right: .5rem;
            }
            .logo-name {
                letter-spacing: 1px;
                font-size: 1.4rem;
                color: #e6720e;
            }
        }
        .menu-items {
            margin-left: 5rem;
            flex: 1;
            display: flex;
            align-items: center;
            .menu-item {
                margin: 0 1rem;
                .menu-name {
                    color: #888;
                    font-size: 0.8rem;
                    position: relative;
                }
                .menu-active {
                    color: #000;
                    &::after {
                        content: '';
                        background-color: #e6720e;
                        border-radius: 50%;
                        width: .4rem;
                        height: .4rem;
                        position: absolute;
                        top: 2rem;
                        left: 50%;
                        transform: translate(-50%,0);
                    }
                }
            }
        }
        .btn-group {
            display: flex;
            align-items: center;
            .iconfont {
                cursor: pointer;
                font-size: 1.4rem;
                &:first-child {
                    margin-right: 2rem;
                }
            }
        }
    }

`