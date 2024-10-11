import React from 'react'
import styles from './Home.module.css'



function Home(){
    return(
        <body>
        <div className={styles.content}>  
            <p>눈으로 맛보는 즐거움 -!</p>         
            <p>맛 있을 지도?</p>
            <img src={'/images/tastymap_kmap.png'} alt="로고" />
        </div>
        </body>
   
    )
}



export default Home
