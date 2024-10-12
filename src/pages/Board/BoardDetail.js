import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Board.module.css'



function BoardDetail (){

    return(

        <div className={styles.board_wrap}>   
            <table className={styles.board_detail}>
                <thead>
                    <tr>
                        <td>제목</td>
                        <td colSpan='5'>맛있게 먹었지만 가격이 아쉬워요.</td>
                    </tr>
                    <tr>
                        <td>작성자</td>
                        <td>맛집탐방가</td>
                        <td>날짜</td>   
                        <td>2024-10-12 05:56</td>   
                        <td>(추천)</td>                        
                        <td>5</td>                        
                    </tr>
                    <tr>
                        <td>식당주소</td>
                        <td colSpan='5'>경기도 김포시....</td>
                    </tr>                   
                </thead>
                <tbody>
                   <tr><td colSpan='6'>맛집에 다녀왔습니다.맛집에 다녀왔습니다.맛집에 다녀왔습니다.
                    맛집에 다녀왔습니다.맛집에 다녀왔습니다.맛집에 다녀왔습니다.
                    맛집에 다녀왔습니다.맛집에 다녀왔습니다.맛집에 다녀왔습니다.
                    맛집에 다녀왔습니다.맛집에 다녀왔습니다.맛집에 다녀왔습니다.
                    맛집에 다녀왔습니다.맛집에 다녀왔습니다.맛집에 다녀왔습니다.
                    맛집에 다녀왔습니다.맛집에 다녀왔습니다.맛집에 다녀왔습니다.
                    맛집에 다녀왔습니다.맛집에 다녀왔습니다.맛집에 다녀왔습니다.
                    맛집에 다녀왔습니다.맛집에 다녀왔습니다.맛집에 다녀왔습니다.
                    맛집에 다녀왔습니다.맛집에 다녀왔습니다.맛집에 다녀왔습니다.
                    맛집에 다녀왔습니다.맛집에 다녀왔습니다.맛집에 다녀왔습니다.
                    맛집에 다녀왔습니다.맛집에 다녀왔습니다.맛집에 다녀왔습니다.
                    맛집에 다녀왔습니다.맛집에 다녀왔습니다.맛집에 다녀왔습니다.
                    맛집에 다녀왔습니다.맛집에 다녀왔습니다.맛집에 다녀왔습니다.</td></tr>
                </tbody>
            </table>

            <div className={styles.board_footer}>
                <Link to = '/boardList'><button>목록</button></Link>
                <Link to = '/home'><button>추천</button></Link>
                {/* 작성자 본인이면...
                <Link to = '/boardUpdate'><button>수정</button></Link> */}                
            </div>
        </div>

    )

}

export default BoardDetail