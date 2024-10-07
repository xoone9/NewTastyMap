import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar } from './components';
import * as pages from './pages';
  

function App() {
  return (
    <div className="App">   

      {/* <Navbar />
      <pages.Main />  */}

      <Router> 
      <Navbar />            
        <Routes>
          <Route path="/" element={ <pages.Main /> } />
        </Routes>
      </Router>      
    </div>
  )
}

export default App;
