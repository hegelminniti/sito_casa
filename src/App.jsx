import { Home } from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Attivita} from './Components/Navbar/Attivita'
import './Styles/main.css'

export function App (){
  return (
   <>
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/attivita" element={<Attivita/>}/>
    </Routes>
   </Router>

   </>
  );
}


