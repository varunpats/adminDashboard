import React from 'react';
import './Featured.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Featured() {
    return (
        <div className='featured'>
            <div className='top'>
                <h1 className='title'>Total Revenue</h1>
                <MoreVertIcon fontSize='small' />
            </div>
            <div className='bottom'>
                <div className='featuredChart'>
                    <CircularProgressbar value={70} text='70%' strokeWidth={5} />
                </div>
                <p className='title'>Total sales made today</p>
                <p className='amount'>$420</p>
                <p className='description'>Previous transactions processing. Last payments may not be included.</p>
                <div className='summary'>
                    <div className='item'>
                        <div className='itemTitle'>Target</div>
                        <div className='itemResult negative'>
                            <ArrowDropDownIcon fontSize='small' />
                            <div className='resultAmount'>$12.4K</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='itemTitle'>Last Week</div>
                        <div className='itemResult positive '>
                            <ArrowDropUpIcon fontSize='small' />
                            <div className='resultAmount'>$4K</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='itemTitle'>Last Month</div>
                        <div className='itemResult positive'>
                            <ArrowDropUpIcon fontSize='small' />
                            <div className='resultAmount'>$35K</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
