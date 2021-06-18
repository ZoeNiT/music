import styled from 'styled-components'

export const SearchModalStyle = styled.div`
width: 45%;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
border-radius: 9px;
background-color: #fff;
overflow: hidden;
.top {
    padding-top: 15rem;
    background: url(${props => props.bg}) no-repeat;
    background-size: cover;
    transform: scale(1.05);
    background-position: 50%;
    position: relative;
    margin-bottom: 1rem;
    &::after {
        content: "";
        background: linear-gradient(270deg,#f27121,#e94057,#8a2387);
        opacity: .3;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .to-search {
        z-index: 1;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 70%;
        padding: 1rem;
        outline: none;
        border: 0;
        background-color: #0000008c;
        color: snow;
        border-radius: 9px;
        text-align: center;
    }
}
.buttom {
    padding: 1rem;
    .hot-title {
        .iconfont {
            color: red;
        }
        .title {
            margin-left: 1rem;
            letter-spacing: 1px;
        }
    }
    .hot-search {
        padding: .5rem;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .hot-item {
            text-align: center;
            cursor: pointer;
            margin: .3rem;
            .hot-name {
                display: block;
                background-color: #eee;
                font-size: .8rem;
                padding: .3rem 1rem;
                border-radius: 3px;
            }
        }
    }
}
`