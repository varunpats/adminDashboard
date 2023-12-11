import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import './Home.scss';

export default function Home() {
    return (
        <div className='home'>
            <Sidebar />
            <div className='container'>
                Container
            </div>
        </div>
    )
}