import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar(){

    return(              
      <header> 
          <nav className={styles.navbar}>                        
              <ul className={styles.rightSide}>                 
                  <Link to ='/'><img src={'/images/tastymap_logo.png'} alt="로고"></img></Link>
                  <h1>맛 있을 지도</h1>
              </ul>  

              <ul className={styles.center}>                
                  <Link to='/about'><text>About</text></Link>
                  <Link to='/boardlist'><text>게시판</text></Link>       
              </ul> 
              
              <ul className={styles.leftSide}> 
                  <Link to = '/join'><button>로그인</button></Link>
                  <Link to = '/join'><button>회원가입</button></Link>
              </ul>
          </nav>

      </header>  
        
    )
}

export default Navbar 