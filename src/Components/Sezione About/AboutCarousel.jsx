import { useCarousel } from './useCarousel';
import '../../Styles/carousel.css'

export function AboutCarousel ({ images }){
  const { currentIndex, currentItem, next, prev } = useCarousel(images);

  return (
    <div className="carousel">
      <button className='chevron' onClick={prev}>
        <img className='chevronImgLeft' src="../../../public/assets/Images/Chevrons/left-chevron.png" alt="" />
      </button>
      
      <div className="carousel-content">
        <img src={currentItem} alt={`Item ${currentIndex}`} />
      </div>
      
      <button className='chevron' onClick={next}>
      <img className='chevronImgRight' src="../../../public/assets/Images/Chevrons/chevron.png" alt="" />
      </button>
    </div>
  );
}
