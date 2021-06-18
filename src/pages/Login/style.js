import styled from 'styled-components'

export const LoginStyle = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 999;
background-image: url(${props => props.bg.main});
background-size: cover;
&::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fffcfc1a;
    filter: blur(8px);
}
    .day-title {
    position: absolute;
    z-index: 1;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    padding: 1rem 3rem;
    font-size: 2rem;
    font-weight: 700;
    transition: all linear .3s;
    color: #e6720e;
    &:hover {
        color: snow;
        background: rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(5px);
    }
    }
    .login-form {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 20%;
        padding: 2rem;
        border-radius: 9px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        background-image: url(${props => props.bg.login});
        background-size: cover;
        z-index: 1;
        .account,.password {
            width: 80%;
            margin: .5rem auto;
            .account-v,.password-v {
                width: 100%;
                text-align: center;
                padding: .8rem 0;
                margin: .5rem 0;   
                border: 0;
                outline: none;
                background-color: #3e3d3d30;
            }
            .tips {
                color: red;
                font-size: .7rem;
                height: 2rem;
                letter-spacing: 1px;
                text-align: center;
            }
        }
        .login-in {
            width: 70%;
            margin: 0 auto;
            .login {
                width: 100%;
                background-image: linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%);
                padding: .9rem 0;
                border-radius: 7px;
                cursor: pointer;
                border: 0;
            }
        }
    }
`