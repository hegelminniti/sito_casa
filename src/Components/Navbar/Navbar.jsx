import '../../Styles/navbar.css'
import { Link } from 'react-router-dom'


export function Navbar() {

    return (
        <div className="navbar">


            <div className="navLogo">Casa vacanze Stella Polare</div>

            {/* -------------------- CREARE ROUTES PER LA NAVBAR ---------------------- */}

            <nav>
                <Link to="/">Home</Link>
                <Link to="/attivita">Attività</Link>
            </nav>
            
            {/* <div className="navLinks">
                <div className='navHome'>Home</div>
                <div className='navAttivita'>Attività</div>
                <div className='navContatti'>Contatti</div>
                <div className='navLingua'>Lingua</div>
                <div className='navPrenota'>PRENOTA ORA</div>
            </div> */}
        </div>
    )
}
