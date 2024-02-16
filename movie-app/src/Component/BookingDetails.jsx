import { useState } from "react";
import './BookingDetails.css';


export const BookingDetails=()=>{
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
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
        // You can perform further actions with the form data here
        console.log(formData);
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
            <div >
                <h1>Seating Arrangment</h1>

                <div className="Booking-div">
                <div className="first-div">
                    <h1>Ticket Booking Form</h1>
                    <form className="form-container">
                <label htmlFor="fname">Enter Your Name</label>
                <input className="input-text" type="text" id="fname" name="firstname" placeholder="Your name.." />
          
                <label htmlFor="lname">Enter Date</label>
                <input className="input-text" type="date" id="lname" name="lastname" placeholder="Your last name.." />
          
                <label htmlFor="country">Select Movie Time</label>
                <select className="select-text" id="country" name="country">
                  <option value="australia">09:00 AM</option>
                  <option value="canada">12:00 PM</option>
                  <option value="usa">03:00PM</option>
                  <option value="usa">06:00PM</option>
                </select>

                <label htmlFor="country">Select No.of Ticket</label>
                <select className="select-text" id="country" name="country">
                  <option value="australia">09:00 AM</option>
                  <option value="canada">12:00 PM</option>
                  <option value="usa">03:00PM</option>
                  <option value="usa">06:00PM</option>
                </select>
          
                <input className="button" type="submit" value="Book Ticket" />
              </form>
                </div>

                <div className="second-div">
                   all the seates
                </div>
                </div>
              
             
            </div>
          );
          
    
    
}