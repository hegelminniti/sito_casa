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
                       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque veritatis consequuntur provident praesentium? Doloremque architecto magnam dignissimos nihil hic repudiandae?
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}