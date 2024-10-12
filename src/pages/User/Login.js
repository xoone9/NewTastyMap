import React from 'react';
import styles from './User.module.css'


const loginAction = {};

function Login (){

    return(

        <div className={styles.user_group}>
            <div>
                <img src={'/images/tastymap_login.png'} alt="로고" />
            </div>
            <div className={styles.user_group_form}>                
                <input type="text" name="id" placeholder="ID" />
                
                <input type="text" name="password" placeholder="PASSWORD" />                
            </div>  

            <div>
                <button onClick={loginAction}>로그인</button>
            </div>                   
        </div>

    )

}

export default Login