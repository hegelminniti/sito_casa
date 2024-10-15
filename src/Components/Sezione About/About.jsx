/* Foto dell'esterno della casa + foto di gioia e breve descrizione */

import { AboutCarousel } from "./AboutCarousel";
import '../../Styles/about.css'

export function About() {

    const images = [
        '../../../public/assets/Images/Gioia/pontile1.jpg',
        '../../../public/assets/Images/Gioia/pontile2.jpg'
    ]
  return (

    
    <>

      <div className="aboutSection">

      
        {/* -------ABOUT CAROUSEL--------- */}

        <div className="aboutCarousel">

            <AboutCarousel images={images}/>

        </div>

        {/* -------ABOUT CAPTION--------- */}

        <div className="aboutText">

            <div className="aboutTitle">About</div>

            <div className="aboutCaption">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illum dignissimos, alias nisi fugiat corrupti obcaecati accusamus provident, numquam ipsum repellat facilis sed aperiam, nam nostrum dolore. Iure doloremque non nihil, rerum saepe qui temporibus suscipit tempore, delectus iste tempora laboriosam, sapiente quidem consequatur autem. Ipsum rerum quis non mollitia!
            </div>

        </div>
      </div>
    </>
  );
}
