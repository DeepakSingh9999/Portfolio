import { useState } from 'react';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.png';
import image3 from '../images/image3.jpg';

const Carousel = () => {
  const items = [
    { imgSrc: `${image1}`, text: 'Hi! I;m Deepak Singh' },
    { imgSrc: `${image2}`, text: 'Learning never stops.' },
    { imgSrc: `${image3}`, text: 'Work never stops.' },
    // Add more items as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-item">
        <img src={items[currentIndex].imgSrc} alt={`Slide ${currentIndex}`} />
        <p>{items[currentIndex].text}</p>
      </div>
      <button className="prev carousel-button" onClick={prevSlide}><i class="fa-solid fa-angles-left"></i></button>
      <button className="next carousel-button" onClick={nextSlide}><i class="fa-solid fa-angles-right"></i></button>
    </div>
  );
};

export default Carousel;
