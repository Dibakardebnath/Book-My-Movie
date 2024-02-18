import { useEffect, useState } from "react";
import "./Movies.css";

import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from "react-router-dom";
import { fetchData } from "../Redux/Api";

export const Movies = () => {
 const dispatch=useDispatch();
const {MovieData}=useSelector((store)=>store)
console.log(MovieData)
  
  // ..................Slider............................        848f6118caa493508c0526a82189f5ab
  const sliderImages = [
    "https://wowslider.com/sliders/demo-74/data1/images/newyorkcity336475_1280.jpg",
    "https://startit.qodeinteractive.com/wp-content/uploads/2015/10/image-slider-1-home-main.jpg",
    "https://wowslider.com/sliders/demo-74/data1/images/newyorkcity336475_1280.jpg",
    "https://startit.qodeinteractive.com/wp-content/uploads/2015/10/image-slider-4-home-main.jpg",
    "https://wowslider.com/sliders/demo-74/data1/images/newyorkcity336475_1280.jpg",
    "https://startit.qodeinteractive.com/wp-content/uploads/2015/10/image-slider-2-home-main.jpg",
    "https://wowslider.com/sliders/demo-74/data1/images/newyorkcity336475_1280.jpg",
    "https://wowslider.com/sliders/demo-74/data1/images/newyorkcity336475_1280.jpg",
    "https://wowslider.com/sliders/demo-74/data1/images/london441853_1280.jpg",
  ];
  // const [autoSlide, setAutoSlide] = useState(true);
  // const [slideInterval, setSlideInterval] = useState(3000);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      goToNextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, []); // No dependency here, as we only want to run once on mount

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const navigate = useNavigate();

  const handlNextPage = (id) => {
  
    navigate(`/bookingdetails/${id}`);
  };


  useEffect(()=>{
    dispatch(fetchData())
  },[])
 

  return (
    <div>
      <div className="slider-container">
        <img className="slide" src={sliderImages[currentIndex]} />
      </div>
      <div className="slider-button">
        <button className="slider-button1" onClick={goToPreviousSlide}>
          &#10094;
        </button>
        <button className="slider-button2" onClick={goToNextSlide}>
          &#10095;
        </button>
      </div>
      <div><h1>Movies</h1></div>
<div className="parant-container">
{MovieData.map((ele)=>
  
  <div onClick={() => handlNextPage(ele.imdbID)}  key={ele.id} className="movie-container">
   <img style={{borderRadius:"10px",width:"200px"}}  src={ele.Poster} alt="" />
   <div className="vote-container">
   <p> <i style={{ color: '#dc344b' }} class="fa-solid fa-star"></i> {ele.Type}</p>

    <p>Year {ele.Year} </p>   
    </div>
  </div>
   )}
</div>
    </div>
  );
};
