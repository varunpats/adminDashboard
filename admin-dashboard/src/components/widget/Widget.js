import React from 'react';
import './Widget.scss';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaidIcon from '@mui/icons-material/Paid';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export default function Widget({ type }) {
    let data;
    const amount = 100;
    const diff = 20;

    switch (type) {
        case "user": data = {
            title: "USERS",
            isMoney: false,
            link: "See all users",
            icon: (
                <PersonIcon className='icon' style={{ color: "crimson", backgroundColor: "rgba(255, 0, 0, 0.2)" }} />
            )
        }
            break;
        case "order": data = {
            title: "ORDERS",
            isMoney: false,
            link: "See all orders",
            icon: (
                <ShoppingCartIcon className='icon' style={{ color: "goldenrod", backgroundColor: "rgba(218, 165, 32, 0.2)" }} />
            )
        }
            break;
        case "earnings": data = {
            title: "EARNINGS",
            isMoney: true,
            link: "View net earnings",
            icon: (
                <PaidIcon className='icon' style={{ color: "green", backgroundColor: "rgba(0, 128, 0, 0.2)" }} />
            )
        }
            break;
        case "balance": data = {
            title: "BALANCE",
            isMoney: true,
            link: "See details",
            icon: (
                <AccountBalanceWalletIcon className='icon' style={{ color: "purple", backgroundColor: "rgba(128, 0, 128, 0.2)" }} />
            )
        }
            break;
        default:
            break;
    }

    return (
        <div className='widget'>
            <div className='left'>
                <span className='title'>{data.title}</span>
                <span className='counter'>{data.isMoney && '$'} {amount}</span>
                <span className='link'>{data.link}</span>
            </div>
            <div className='right'>
                <div className='percentage positive'>
                    <ArrowDropUpIcon />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}
