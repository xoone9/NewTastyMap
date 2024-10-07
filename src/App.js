import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { Main } from './pages';
  

function App() {
  return (
    <div className="App">      
      <Router> 
      <Navbar />       
        <Routes>
          <Route path="/" element={ <Main /> } />
        </Routes>
      </Router>      
    </div>
  )
}

export default App;
