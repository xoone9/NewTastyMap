import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import * as pages from '../../pages';
import styles from './Content.module.css'
  

function Content() {

  return (
    <div className={styles.wrap}>           
          
          <Routes>
            <Route path="/" element={<pages.Home />} />            
          </Routes> 

          <Routes>
            <Route path="/about" element={<pages.About />} />
            <Route path="/boardlist" element={<pages.BoardList />} />
            {/* <Route path="/boardDetail:id" element={<pages.BoardDetail />} />             */}
            <Route path="/boardDetail" element={<pages.BoardDetail />} />
            <Route path="/boardWrite" element={<pages.BoardWrite />} />
          </Routes>


          <Routes>
            <Route path="/join" element={<pages.Join />} />
            <Route path="/login" element={<pages.Login />} />
          </Routes>         
      
    </div>
  )
}

export default Content;
