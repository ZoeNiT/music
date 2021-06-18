import styled from 'styled-components'

export const NewDiscStyle = styled.div`
margin: 2rem auto 4rem;
.new-disc-items {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    .new-disc-item {
        overflow: hidden;
        border-radius: 9px;
        width: 32%;
        margin: 1rem 0;
        cursor: pointer;
/*         box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
        position: relative;
        align-items: center;
        .new-disc-img {
            position: relative;
            flex: 1;
            .new-disc-ava {
                width: 7rem;
                height: 7rem;
                border-radius: 9px;
                background-color: #eee;
            }                
            &::after {
                position: absolute;
                transition: all linear .3s;
                top: 50%;
                transform: translateY(-50%);
                right: -1rem;
                width: 80%;
                z-index: -1;
                height: 80%;
                display: block;
                content: '';
                background: url(${props => props.bg.disc}) no-repeat;
                background-size: 100%;
            }
        }
        &:hover {
            .new-disc-img::after {
                transform: translateY(-50%) rotate(90deg);
                right: -1.2rem;
            }
            color: #e6720e;
            box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        }
        .new-disc-msg {
            flex: 2;
            text-align: center;
            padding: 0 1.2rem;
            overflow: hidden;
            .new-disc-name {
                font-size: 1rem;
                color: #333;
                margin-bottom: .3rem;
            }
            .new-disc-artist {
                font-size: .9rem;
                color: #888;
            }

        }
        .new-disc-tag {
            position: absolute;
            top: 5%;
            right: -7%;
            transform: rotate(45deg);
            .tag {
                background-color: #3ff9dc54;
                width: 6rem;
                height: 2rem;
                text-align: center;
                display: block;
                line-height: 2rem;
            }
        }
    }
}
`