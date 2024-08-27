import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'name',
        headerName: '이름',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: '나이',
        width: 150,
        editable: true,
    },
    {
        field: 'tel',
        headerName: '전화번호',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, name: "일길동", age: 11, tel: "010-1111-1111" },
    { id: 2, name: "이길동", age: 22, tel: "010-2222-2222" },
    { id: 3, name: "삼길동", age: 33, tel: "010-3333-3333" },
    { id: 4, name: "사길동", age: 44, tel: "010-4444-4444" },
    { id: 5, name: "오길동", age: 55, tel: "010-5555-5555" },
    { id: 6, name: "육길동", age: 66, tel: "010-6666-6666" },
    { id: 7, name: "칠길동", age: 77, tel: "010-7777-7777" },
    { id: 8, name: "팔길동", age: 88, tel: "010-8888-8888" },
    { id: 9, name: "구길동", age: 99, tel: "010-9999-9999" },
    { id: 10, name: "십길동", age: 10, tel: "010-0000-0000" },
];

export default function TestDataGrid2() {
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
}