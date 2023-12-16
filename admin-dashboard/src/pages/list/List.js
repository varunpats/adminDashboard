import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './List.scss';
import Datatable from '../../components/datatable/Datatable';

export default function List() {
  return (
    <div className='list'>
      <Sidebar />
      <div className='container'>
        <Navbar />
        <Datatable />
      </div>
    </div>
  )
}
