import React from 'react'
import Table from '../../components/Table/Table'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import styles from './Board.module.css'
import { Link } from 'react-router-dom'



const headerName = [
    "번호", "지역", "종류", "제목", "작성자", "날짜", "추천"
]

const data = [
    {       
        num: 1,        
        location: '부산',
        type: '양식',
        title: '맛있지만...',
        writer: '맛집탐방가',
        date: '2024/10/11 09:45',
        recommend: 3
    },
    {        
        num: 2,        
        location: '부산',
        type: '중식',
        title: '맛있지만...',
        writer: '맛집탐방가',
        date: '2024/10/11 09:45',
        recommend: 3    
    },
    {        
        num: 3,        
        location: '부산',
        type: '일식',
        title: '맛있지만...',
        writer: '맛집탐방가',
        date: '2024/10/11 09:45',
        recommend: 3     
    },
    {       
        num: 4,        
        location: '부산',
        type: '한식',
        title: '맛있지만...',
        writer: '맛집탐방가',
        date: '2024/10/11 09:45',
        recommend: 3  
    },
    {       
        num: 5,        
        location: '부산',
        type: '디져트',
        title: '맛있지만...',
        writer: '맛집탐방가',
        date: '2024/10/11 09:45',
        recommend: 3      
    } 
]

function BoardList(){

    return (

        <div className={styles.tableWarp}>        
        {/* <table className={styles.table}>
            <thead>                
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <th key={header.id}>{flexRender( header.column.columnDef.header, header.getContext())}</th>))}
                    </tr>))                    
                }
            </thead>
            <tbody>
                {table.getRowModel().rows.map(row => (
                    <tr key={row.id}>                     
                        {row.getVisibleCells().map((cell) => (<td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>))}
                    </tr>))
                 }
            </tbody>
        </table> */}  
            <table className={styles.tableWarp}>
                <thead>
                    <tr>
                        {headerName.map((item, index) => {
                            return ( <td key={index}>{item}</td>);
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.num}</td>
                                <td>{item.type}</td>
                                <td>{item.location}</td>
                               
                                <Link to='/boardDetail'><td>{item.title}</td></Link>
                            
                               
                                <td>{item.writer}</td>
                                <td>{item.date}</td>
                                <td>{item.recommend}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
           

        </div>
    )
}

export default BoardList