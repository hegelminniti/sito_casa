import { useState} from 'react';

export function useCarousel(images) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Funzione per andare avanti nel carosello
  function next() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  // Funzione per andare indietro nel carosello
  function prev() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }

  // Restituiamo lo stato e le funzioni
  return {
    currentIndex,
    currentItem: images[currentIndex],
    next,
    prev
  };
}
