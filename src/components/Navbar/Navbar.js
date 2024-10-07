import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';


function Navbar(){

    return(              

        <div className={styles.navbar}>                        
            <div className={styles.rightSide}>
                <img className={styles.img} src={'/images/tastymap_logo.png'} alt="로고"></img>  
                <h1>맛 있을 지도</h1>       
            </div>  

            <div className={styles.center}>                
                <Link to='/pages.About'><text>About</text></Link>
                <Link to='pages.About'><text>게시판</text></Link>               
            </div>   

            <div className={styles.leftSide}>
                <buttum className={styles.btn} onClick='pages.About'>로그인</buttum>
                <buttum className={styles.btn} onClick='pages.About'>회원가입</buttum>
                {/* <Link to='pages.About'>로그인</Link>
                <Link to='pages.About'>회원가입</Link>                */}
            </div>
        </div>         
        
    )
}

export default Navbar 