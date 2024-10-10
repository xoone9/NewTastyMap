import React from 'react'
import { useReactTable, createColumnHelper, getCoreRowModel, flexRender } from '@tanstack/react-table'

//데이터 정의



const data = [
    {       
        firstName: 'aaa',        
        age: 22       
    },
    {        
        firstName: 'aaa',        
        age: 22       
    },
    {        
        firstName: 'aaa',       
        age: 22       
    },
    {       
        firstName: 'aaa',        
        age: 22       
    },
    {       
        firstName: 'aaa',        
        age: 22       
    } 
]


const columnHelper = createColumnHelper();

//컬럼 정의
// const columns = [
//     {
//         accessoryKey: 'firstName',
//         header: 'First Name'  ,  
//         cell: (props) => <p>{props.getValue()}</p>
        
//     },
//     {
//         accessoryKey: 'age',
//         header: 'Age' ,      
//         cell: (props) => <p>{props.getValue()}</p>
//     }
// ]

const columns = [
    columnHelper.accessor("firstName", { header: "이름" }),
    columnHelper.accessor("age", { header: "나이" }),
]

function Table(){
    //테이블 초기화
    const table = useReactTable({columns, data, getCoreRowModel: getCoreRowModel(),}); 

    console.log(table);
    
    return (

        <table>
            <thead>                
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (<th key={header.id}>{flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}</th>))}
                    </tr>))                    
                }
            </thead>
            <tbody>
                {table.getRowModel().rows.map(row => {
                    <tr key={row.id}>
                        {row.getVisibleCells().map(cell => (<td key={cell.id}>{flexRender(
                  cell.column.columnDef.cell,
                  cell.getContext(),
                )}</td>))}
                    </tr>})
                 }
            </tbody>
        </table>
    )
}

export default Table



