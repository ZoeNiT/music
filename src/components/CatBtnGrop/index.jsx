import React from 'react';
import PropTypes from 'prop-types'

import {CatBtnGroupStyle} from './style'

const CatBtnGroup = (props) => {

    const { cat, menu, toggleCat } = props

    return (
        <CatBtnGroupStyle>
            {
                menu.map((item, i) => (
                    <li onClick={() => toggleCat(item)} key={i} className={cat === item.name || cat === item.type ? 'btn-item btn-item-active' : 'btn-item'}>
                        {item.name === '全部' ? '为您推荐' : item.name}
                    </li>
                ))
            }
        </CatBtnGroupStyle>
    );
};

CatBtnGroup.propTypes = {
    cat: PropTypes.string,
    menu: PropTypes.array,
    taggleCat: PropTypes.func,
}

export default CatBtnGroup;