import React from 'react';

import {HomeStyle} from './style'

import Swiper from './Swiper'
import RecoSong from './RecoSong'
import NewDisc from './NewDisc'

const Home = () => {
    return (
        <HomeStyle>
            <Swiper />
            <RecoSong />
            <NewDisc />
        </HomeStyle>
    );
};

export default Home;