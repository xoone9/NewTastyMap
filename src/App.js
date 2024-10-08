import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import * as components from './components';
import * as pages from './pages';
  

function App() {
  return (
    <div className="App">

        <Router>     
          
          <components.Navbar />

          <Routes>
            <Route path="/" element={<pages.Home />} />            
          </Routes> 

          <Routes>
            <Route path="/about" element={<pages.About />} />
            <Route path="/boardlist" element={<pages.BoardList />} />            
          </Routes>


          <Routes>
            <Route path="/join" element={<pages.Join />} />
            <Route path="/login" element={<pages.Login />} />
          </Routes>         
        </Router>
       
        <components.Footer />    

    </div>
  )
}

export default App;
