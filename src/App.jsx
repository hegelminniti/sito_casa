import { Home } from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Attivita } from './Components/Navbar/Attivita'
import Callback from './Callback';

export function App (){
  return (
   <>
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/attivita" element={<Attivita/>}/>
      <Route path="/callback" element={<Callback />} />
    </Routes>
   </Router>

   </>
  );
}


