import { Link } from "react-router-dom"
import './Nav.css'


export const Nav=()=>{
          return (
            <nav className="navbar">
              <div className="navbar-container">
                <Link to={'/AllMovies'} className="navbar-logo">Booking-my-Movie</Link>
                <div className="search-container">
          <input className="input-search" type="text" placeholder="Search your favorite movie" />
          <i style={{position:"absolute",right:"10px",color:"gray"}} class="fa-solid fa-magnifying-glass"></i>
       </div>
                 <ul className="navbar-menu">
                  <li className="navbar-item">
                    <Link to={'/bookingdetails/:id'} className="navbar-link">Booking Details</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to={'/register'} className="navbar-link">Profile</Link>
                  </li>
                </ul>
              </div>
            </nav>
          );
        }
        
    