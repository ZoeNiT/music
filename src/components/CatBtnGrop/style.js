import styled from 'styled-components'

export const CatBtnGroupStyle = styled.ul`
margin: 1rem 0 1.2rem;
display: flex;
align-items: center;
justify-content: center;
.btn-item {
    cursor: pointer;
    margin: 0 1rem;
    color: #333; 
}
.btn-item-active {
    font-weight: bold;
    border-bottom: 3px solid #e6720e;
}
`