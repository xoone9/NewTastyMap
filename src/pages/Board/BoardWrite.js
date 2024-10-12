import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Board.module.css';


function BoardWrite(){

    const [input, setInput] = useState({title:'', type: '', location:'', content:'', thumbnail:'' });
    const { title, type, location, content, thumbnail } = input;

    return(

        <div className={styles.board_write_wrap}>     
            <div>
                <input type="text" name="title" placeholder="제목" value={title} />    
            </div>
            <div>
                <select>
                    <option>카테고리</option>
                    <option key='01' value='01'>한식</option>
                    <option key='02' value='02'>양식</option>
                    <option key='03' value='03'>일식</option>
                    <option key='04' value='04'>중식</option>
                    <option key='05' value='05'>디저트</option>
                </select>
            </div>    
            <div>                
                <input type="text" name="location" placeholder="위치" value={location} />
            </div>
            <div>
                {/* <UploadFile ref = {uploadReference} /> */}
            </div>
            <div>
                {/* <Editor value={desc} onChange={onEditorChange} />                 */}
            </div>
            <div>
                <Link to = '/boardList'><button>저장</button></Link>                             
            </div>
        </div>

    )

}

export default BoardWrite