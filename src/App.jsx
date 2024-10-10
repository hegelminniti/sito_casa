import { Descrizione } from './Components/Descrizione';
import { Galleria } from './Components/Galleria';
import { Servizi } from './Components/Servizi';
import { Contatti } from './Components/Contatti';
import {Prenota} from './Components/Prenota'
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';

export function App (){
  return (
    <div>
      <Navbar/>
      <Home/>
      <Descrizione />
      <Galleria />
      <Servizi />
      <Prenota/>
      <Contatti />
    </div>
  );
}


