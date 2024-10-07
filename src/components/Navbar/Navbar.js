import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';


function Navbar(){
    return(
        <div className='navbar'>
            
            <div className='leftSide'>
               <img className={styles.img} src={'/images/tastymap_logo.png'} alt="로고"></img>  
               <h1>맛 있을 지도</h1>       
            </div>  

            <div className='center'>
                <Link >About</Link>
                <Link >게시판</Link>               
            </div>   

            <div className='rightSide'>
                <Link >로그인</Link>
                <Link >회원가입</Link>               
            </div>   

        </div>

        
    )
}

export default Navbar 