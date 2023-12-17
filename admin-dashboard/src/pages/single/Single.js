import React from 'react';
import './Single.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/Table';

export default function Single() {
    return (
        <div className='single'>
            <Sidebar />
            <div className='container'>
                <Navbar />
                <div className='top'>
                    <div className='left'>
                        <div className='editButton'>Edit</div>
                        <h1 className='title'>Information</h1>
                        <div className='item'>
                            <img src='https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' alt='' className='itemImg' />
                            <div className='details'>
                                <h2 className='name'>Jane Doe</h2>
                                <div className='detail'>
                                    <span className='itemKey'>Email:</span>
                                    <span className='itemValue'>janedoe@gmail.com</span>
                                </div>
                                <div className='detail'>
                                    <span className='itemKey'>Phone:</span>
                                    <span className='itemValue'>+1 2345 67 89</span>
                                </div>
                                <div className='detail'>
                                    <span className='itemKey'>Address:</span>
                                    <span className='itemValue'>Elton St. 234 Garedn Yd. NewYork</span>
                                </div>
                                <div className='detail'>
                                    <span className='itemKey'>Country:</span>
                                    <span className='itemValue'>USA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <Chart aspect={3 / 1} title='User spending(last 6 months)' />
                    </div>
                </div>
                <div className='bottom'>
                    <h1 className='title'>Last Transactions</h1>
                    <Table />
                </div>
            </div>
        </div>
    )
}
