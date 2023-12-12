import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import './Home.scss';
import Navbar from '../../components/navbar/Navbar';

export default function Home() {
    return (
        <div className='home'>
            <Sidebar />
            <div className='container'>
                <Navbar />
                Container
            </div>
        </div>
    )
}