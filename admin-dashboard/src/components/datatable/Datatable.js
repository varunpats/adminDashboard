import React from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datasource';
import './Datatable.scss';

export default function Datatable() {

    const actionColumn = [{
        field: 'action',
        headerName: 'Action',
        width: 200,
        renderCell: () => {
            return (
                <div className='cellAction'>
                    <Link to='/users/test'>
                        <div className='viewButton'>View</div>
                    </Link>
                    <div className='delButton'>Delete</div>
                </div>
            )
        }
    }]

    return (
        <div className='datatable'>
            <div className='title'>
                Users
                <Link to='/users/new' style={{ textDecoration: 'none' }} className='link'>
                    Add New
                </Link>
            </div>

            <DataGrid
                className='datagrid'
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 9 },
                    },
                }}
                pageSizeOptions={[9]}
                checkboxSelection
            />
        </div>
    )
}
