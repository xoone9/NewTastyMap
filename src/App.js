import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import * as components from './components';
  

function App() {
  return (

    <div className='app'>

        <Router>     
          
          <components.Navbar />          
          <components.Content />
            
        </Router>       
       
        <components.Footer />    

    </div>
  )
}

export default App;
