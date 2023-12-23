import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import './New.scss';

export default function New({ inputs, title }) {
    const [file, setFile] = useState("");

    console.log(file);
    return (
        <div className='new'>
            <Sidebar />
            <div className='container'>
                <Navbar />
                <div className='top'>
                    <h1>{title}</h1>
                </div>
                <div className='bottom'>
                    <div className='left'>
                        <img src={file ?
                            URL.createObjectURL(file) :
                            'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'} alt='' />
                    </div>
                    <div className='right'>
                        <form>
                            <div className='formInput'>
                                <label htmlFor='fileUpload'>
                                    Image<UploadFileIcon className='icon' />
                                </label>
                                <input type='file' id='fileUpload' onChange={(e) => setFile(e.target.files[0])} style={{ display: 'none' }} />
                            </div>
                            {inputs.map((input) => {
                                return <div className='formInput' key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} />
                                </div>
                            })}
                            <button className='sendButton'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
