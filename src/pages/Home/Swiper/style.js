import styled from 'styled-components'

export const SwiperStyle = styled.div`
position: relative;
width: 80%;
margin: 0 auto;
overflow: hidden;
.banners-items {
    display: flex;
    align-items: center;
    position: relative;
    padding-top: 23rem;
    .banners-item {
        transition: all linear .3s;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        .banners-img {
            width: 100%;
            height: 23rem;
            border-radius: 9px;
        }
    }
}
.left-btn,.right-btn {
    color: snow;
    opacity: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    padding: 1rem .1rem;
    background-color: #00000047;
    .iconfont {
        font-size: 3rem;
    }
}
.left-btn {
    left: 0;
}
.right-btn {
    right: 0;
}
.dot-items {
    opacity: 0;
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: #00000047;
    padding: .3rem .5rem;
    border-radius: 9px;
    display: flex;
    align-items: center;
    .dot-item {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background-color: #ffffff59;
        margin: 0 .1rem;
        cursor: pointer;
    }
}
&:hover {
    .left-btn,.right-btn,.dot-items {
        opacity: 1;
    }
}
`