import React, { useContext } from 'react'
import './Navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import ViewListIcon from '@mui/icons-material/ViewList';
import { darkModeContext } from '../../context/darkModeContext';

export default function Navbar() {
  const { dispatch } = useContext(darkModeContext);

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='Search...' />
          <SearchIcon />
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageIcon className='icon' />
            English
          </div>
          <div className='item'>
            {!darkModeContext._currentValue.darkMode && <DarkModeIcon className='icon' onClick={() => dispatch({type: 'TOGGLE'})} />}
            {darkModeContext._currentValue.darkMode && <WbSunnyIcon className='icon' onClick={() => dispatch({type: 'TOGGLE'})} />}
          </div>
          <div className='item'>
            <FullscreenExitIcon className='icon' />
          </div>
          <div className='item'>
            <NotificationsIcon className='icon' />
            <div className='count'>2</div>
          </div>
          <div className='item'>
            <ChatIcon className='icon' />
            <div className='count'>1</div>
          </div>
          <div className='item'>
            <ViewListIcon className='icon' />
          </div>
          <div className='item'>
            <img src='https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" className='avatar' />
          </div>
        </div>
      </div>
    </div>
  )
}
