import React from 'react';
import styles from './User.module.css'


const joinAction = {};

function Join (){

    return(

        <div className={styles.user_group}>
            <div>
                <img src={'/images/tastymap_join.png'} alt="로고" />
            </div>
            <div className={styles.user_group_form}>                
                <input type="text" name="id" placeholder="ID" />
                
                <input type="text" name="password" placeholder="PASSWORD" /> 
               
                <input type="text" name="nickname" placeholder="NICKNAME" />
            </div>  

            <div>
                <button onClick={joinAction}>회원가입</button>
            </div>                   
        </div>

    )

}

export default Join