import React from 'react'
import Map from './Map';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import './Home.css'



function Home() {



    return (
        <div className='home'>
            <div className="home__map">
                <Map />
            </div>
            <div className="app__search">
                <input placeholder="Search??" />
                <SearchIcon />
            </div>
        </div>
    )
}

export default Home
