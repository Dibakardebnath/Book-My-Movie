import { useEffect, useState } from "react";
import "./BookingDetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

export const BookingDetails = () => {
  const [myData, setMyData] = useState([]);
  const {MovieData}=useSelector((store)=>store)

  const { id } = useParams();
  console.log(id);
  useEffect(()=>{
    const filteredData =MovieData.filter(
      (user) => user.imdbID === id
    )
    setMyData(filteredData);



  },[])
 

  const [formData, setFormData] = useState({
    firstName: "",
    date: "",
    time: "",
    number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedSeats.length == 0) {
      alert("Choose your seats first!");
    } else if (formData.number == selectedSeats.length) {
      alert("Your seats are booked");
    } else {
      alert("please enter valid number");
    }

    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/");
        const filteredData = res.data.users[0].Search.filter(
          (user) => 
        
            user.imdbID === id
           
          
          
        );
        setMyData(filteredData);
        console.log(filteredData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  };
  const [seats, setSeats] = useState([
    ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8"],
    ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8"],
    ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8"],
    ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8"],
    ["E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8"],
    ["F1", "F2", "F3", "F4", "F5", "F6"],
  ]);

  // Initialize selected seats state
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Function to handle seat selection
  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      // Deselect the seat if already selected
      setSelectedSeats(
        selectedSeats.filter((selectedSeat) => selectedSeat !== seat)
      );
    } else {
      // Select the seat if not already selected
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  // Function to check if a seat is selected
  const isSeatSelected = (seat) => {
    return selectedSeats.includes(seat);
  };
  /*   <form onSubmit={handleSubmit}>
         
            <label htmlFor="firstName">First Name:</label>
            <br />
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
      
            <label htmlFor="lastName">Last Name:</label><br />
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          <br />
       
            <label htmlFor="email">Email:</label><br />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          
          <button type="submit">Submit</button>
        </form> */

  return (
    <div>
      <div className="Booking-div">
        <div className="first-div">
          <h1>Ticket Booking Form</h1>
          <form className="form-container" onSubmit={handleSubmit}>
            <label className="label" htmlFor="fname">
              Enter Your Name
            </label>
            <input
              className="input-text"
              type="text"
              id="fname"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Your name.."
            />

            <label className="label" htmlFor="lname">
              Enter Date
            </label>
            <input
              className="input-text"
              type="date"
              id="lname"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />

            <label className="label" htmlFor="country">
              Select Movie Time
            </label>
            <select
              className="select-text"
              id="country"
              name="time"
              value={formData.time}
              onChange={handleChange}
            >
              <option value="09:00 AM">09:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="03:00PM">03:00PM</option>
              <option value="06:00PM">06:00PM</option>
              <option value="09:00 PM">09:00 PM</option>
            </select>

            <label className="label" htmlFor="country">
              Select No.of Ticket
            </label>
            <select
              className="select-text"
              id="country"
              name="number"
              value={formData.number}
              onChange={handleChange}
            >
              <option value="">select your seats</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>

            <input className="button" type="submit" value="Book Ticket" />
          </form>
        </div>

        <div className="theater-seating">
          <h1>Theater Seating Arrangement</h1>
          <div className="seats">
            {seats.map((row, rowIndex) => (
              <div key={rowIndex} className="row">
                {row.map((seat, seatIndex) => (
                  <div
                    key={seatIndex}
                    className={`seat ${isSeatSelected(seat) ? "selected" : ""}`}
                    onClick={() => handleSeatClick(seat)}
                  >
                    {seat}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p>Selected Seats: {selectedSeats.join(", ")}</p>
        </div>
      </div>
        <h1>Your Movie Details</h1>
        <div className="details-box">
        {formData.date && formData.time && formData.number && formData.firstName && myData.map((ele)=>
           
           <div className="details-box2">
            <img width={'auto'} src={ele.Poster} alt="" />
            <div className="details-box3">
              <h1>Movie: {ele.Title}</h1>
              <h1>Date: {formData.date}</h1>
              <h1>Time: {formData.time}</h1>
              <h1>Seats no.: {formData.number}</h1>
              <h1>Seates: {selectedSeats.join(", ")}
              </h1>
            </div>
           </div>
        )}
        </div>
        
      
    </div>
  );
};
