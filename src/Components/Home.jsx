import { Navbar } from "./Navbar/Navbar"
import '../Styles/home.css'
import '../Styles/navbar.css'
import { About } from "./Sezione About/About"

export function Home(){
    return(

        <>

        <div className="navContainer">
         <Navbar></Navbar>
        </div>
        <div className="mainContainer">

            {/* --------HERO SECTION ----------- */}

            <div className="heroMain">
                <img className="heroMainImg" src="../../public/assets/Images/Gioia/HeroGioiaWave.png" alt="Lungomare di Gioia Tauro" />

                <div className="heroMainText">
                    <div className="heroMainTitle">
                        Stella Polare
                    </div>
                    <div className="heroMainDescription">
                       La nostra casa, situata nel cuore del paese, offre una posizione perfetta a pochi metri dalla stazione. <br /> Un&apos;oasi di comfort e comodità per esplorare tutto ciò che la zona ha da offrire.
                    </div>

                    <div className='heroPrenota'>PRENOTA</div>
                </div>
            </div>

            {/* ---------ABOUT SECTION------------- */}

            <About></About>

        </div>

        </>
    )
}