import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import BookIcon from '@mui/icons-material/Book';
import SettingsIcon from '@mui/icons-material/Settings';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import OutboundIcon from '@mui/icons-material/Outbound';
import { darkModeContext } from '../../context/darkModeContext';

export default function Sidebar() {
    const { dispatch } = useContext(darkModeContext);

    return (
        <div className='sidebar'>
            <div className='top'>
                <Link to='/' style={{ textDecoration: 'none' }} >
                    <span className='logo'>
                        React Admin
                    </span>
                </Link>
            </div>
            <div className='center'>
                <ul>
                    <p className='title'>MAIN</p>
                    <li>
                        <DashboardIcon className='icon' />
                        <span>Dashboard</span>
                    </li>
                    <p className='title'>LIST</p>
                    <Link to='/users' style={{ textDecoration: 'none' }} >
                        <li>
                            <SupervisorAccountIcon className='icon' />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to='/products' style={{ textDecoration: 'none' }} >
                        <li>
                            <Inventory2Icon className='icon' />
                            <span>Products</span>
                        </li>
                    </Link>
                    <li>
                        <ShoppingBagIcon className='icon' />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className='icon' />
                        <span>Delivery</span>
                    </li>
                    <p className='title'>USEFUL</p>
                    <li>
                        <InsertChartIcon className='icon' />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsIcon className='icon' />
                        <span>Notifications</span>
                    </li>
                    <p className='title'>SERVICE</p>
                    <li>
                        <MonitorHeartIcon className='icon' />
                        <span>System Health</span>
                    </li>
                    <li>
                        <BookIcon className='icon' />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className='icon' />
                        <span>Settings</span>
                    </li>
                    <p className='title'>USER</p>
                    <li>
                        <PersonIcon className='icon' />
                        <span>Profile</span>
                    </li>
                    <li>
                        <OutboundIcon className='icon' />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className='bottom'>
                <div className='colorOption' onClick={() => dispatch({type: 'LIGHT'})}></div>
                <div className='colorOption' onClick={() => dispatch({type: 'DARK'})}></div>
            </div>
        </div>
    )
}
