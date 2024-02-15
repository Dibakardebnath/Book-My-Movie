import { useEffect, useState } from "react";
import './Movies.css'

export const Movies=()=>{
    const images = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKyUbqgVPThBXpaXixpTV51Rlvu82uJaCXvw&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT8gsKQJAwV50GuIr6cERxIqJeC0yCGn8P1g&usqp=CAU',
        ''
       
      ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change image every 3 seconds
  
      return () => clearInterval(intervalId);
    }, [images.length]);
  
    return (
      <div className="slider-container">
        {images.map((image, index) => (
          <img
            key={index}
            className={`slider-image ${index === currentIndex ? 'active' : ''}`}
            src={image}
            alt={`Slide ${index}`}
          />
        ))}
      </div>
    );
}