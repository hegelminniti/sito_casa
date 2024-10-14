import { Navbar } from "./Navbar/Navbar"
import '../Styles/home.css'
import '../Styles/navbar.css'

export function Home(){
    return(

        <>

        <div className="navContainer">
         <Navbar></Navbar>
        </div>
        <div className="mainContainer">
            <div className="heroMain">
                <img className="heroMainImg" src="../../public/Hero_Gioia_Tauro.jpg" alt="Lungomare di Gioia Tauro" />

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
        </div>
        </>
    )
}