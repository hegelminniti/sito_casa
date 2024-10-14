import '../../Styles/navbar.css'
import { Link } from 'react-router-dom'


export function Navbar() {

    return (
        <div className="navbar">


            <div className="navLogo">Casa vacanze Stella Polare</div>

            {/* -------------------- CREARE ROUTES PER LA NAVBAR ---------------------- */}

            <nav className="navLinks">
                <Link to="/" className='navHome'>Home</Link>
                <Link to="/attivita" className='navAttivita'>Attività</Link>
                <div className='navContatti'>Contatti</div>
                <div className='navLingua'>
                    <select name="language" id="language" className='selectLanguage'>
                        <option value="it" className='langIT'>IT</option>
                        <option value="en" className='langEN'>EN</option>
                    </select>
                </div>
                <div className='navPrenota'>PRENOTA</div>
            </nav>
        </div>
    )
}
