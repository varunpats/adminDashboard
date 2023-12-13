import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import './Home.scss';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';

export default function Home() {
    return (
        <div className='home'>
            <Sidebar />
            <div className='container'>
                <Navbar />
                <div className='widgets'>
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earnings" />
                    <Widget type="balance" />
                </div>
                <div className='charts'>
                    <Featured />
                    <Chart />
                </div>
            </div>
        </div>
    )
}