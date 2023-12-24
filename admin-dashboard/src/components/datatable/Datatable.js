import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datasource';
import './Datatable.scss';

export default function Datatable() {
    const [data, setData] = useState(userRows);

    const deleteData = (id) => {
        setData(data.filter((item) => item.id !== id))
    }

    const actionColumn = [{
        field: 'action',
        headerName: 'Action',
        width: 200,
        renderCell: (params) => {
            return (
                <div className='cellAction'>
                    <Link to='/users/test'>
                        <div className='viewButton'>View</div>
                    </Link>
                    <div className='delButton' onClick={() => deleteData(params.row.id)}>Delete</div>
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
                rows={data}
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
