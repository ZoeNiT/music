import styled from 'styled-components'

export const RescSongStyle = styled.div`
margin-top: 1.5rem;
.reco-items {
    display: flex;
    justify-content: space-around;
    position: relative;
    .reco-item {
        flex: 1;
        margin: 0 .7rem;
        cursor: pointer;
        &:hover {
            .reco-top {
                &::after {
                    top: -.3rem;
                    right: -.3rem;
                    background-color: #ff9600;
                }
                &::before {
                    top: -.6rem;
                    right: -.6rem;
                    background-color: #ff960080;
                }
            }
        }
        .reco-top {
            position: relative;
            &::after,&::before {
                transition: all linear .3s;
                position: absolute;
                content: '';
                border-radius: 7px;
                background-color: #d9d9d9;
                opacity: .5;
                z-index: -1;
            }
            &::after {
                width: 90%;
                height: 90%;
                top: -.1rem;
                right: -.1rem;
            }
            &::before {
                width: 80%;
                height: 80%;
                top: -.3rem;
                right: -.3rem;
            }
            .reco-img {
                width: 14rem;
                height: 14rem;
                border-radius: 9px;
            }
            .playcount {
                position: absolute;
                top: 0;
                right: 0;
                padding: .3rem .7rem;
                border-radius: 0 9px 0 0;
                background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 97%, rgba(0, 0, 0, 0.5) 100%);
                color: snow;
                >span {
                    margin: 0 .1rem;
                }
            }
        }
        .reco-buttom {
            padding: .3rem;
            .reco-name {
                color: #333;
                font-size: 1rem;
                font-weight: 400;
            }
            .reco-tags {
                margin-top: .3rem;
                font-size: .8rem;
                color: #e6720e;
            }
        }
    }
}
`