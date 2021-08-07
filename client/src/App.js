
import Navbar from './component/Navbar';
import { Route } from 'react-router-dom';
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Sign from './component/Sign'
import Login from './component/Login'
import './App.css';
function App() {
  return (
    <>
    <Navbar/>
          <Route exact path="/">
              <Home/>
          </Route>    
          <Route exact path="/About">
            <About/>
           </Route>
           <Route exact path="/Contact">
            <Contact/>
          </Route>
          <Route exact path="/Sign">
            <Sign/>
          </Route>
          <Route exact path = "/Login">
            <Login/>
          </Route>
   </>
      
    

  );
}

export default App;
