import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import './New.scss';

export default function New() {
    return (
        <div className='new'>
            <Sidebar />
            <div className='container'>
                <Navbar />
                <div className='top'>
                    <h1>Add New User</h1>
                </div>
                <div className='bottom'>
                    <div className='left'>
                        <img src='https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg' alt='' />
                    </div>
                    <div className='right'>
                        <form>
                            <div className='formInput'>
                                <label htmlFor='fileUpload'>
                                    Image<UploadFileIcon className='icon' />
                                </label>
                                <input type='file' id='fileUpload' style={{ display: 'none' }} />
                            </div>
                            <div className='formInput'>
                                <label>Username</label>
                                <input type='text' placeholder='john_doe' />
                            </div>
                            <div className='formInput'>
                                <label>Name</label>
                                <input type='text' placeholder='John Doe' />
                            </div>
                            <div className='formInput'>
                                <label>Email</label>
                                <input type='email' placeholder='john_doe@gmail.com' />
                            </div>
                            <div className='formInput'>
                                <label>Phone</label>
                                <input type='text' placeholder='+1 234 567 89' />
                            </div>
                            <div className='formInput'>
                                <label>Password</label>
                                <input type='password' />
                            </div>
                            <div className='formInput'>
                                <label>Address</label>
                                <input type='text' placeholder='Elton St. 216 NewYork' />
                            </div>
                            <div className='formInput'>
                                <label>Country</label>
                                <input type='text' placeholder='USA' />
                            </div>
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
