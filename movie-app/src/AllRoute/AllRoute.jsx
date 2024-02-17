import {Route, Routes} from 'react-router-dom'
import { Movies } from '../Component/Movies'
import { BookingDetails } from '../Component/BookingDetails'
import { Register } from '../Component/Register'


export const AllRoute=()=>{

    return <Routes>
     
     <Route path='//AllMovies' element={<Movies/>}/>
     <Route path='/bookingdetails/:id' element={<BookingDetails/>}/>
     <Route path='/register' element={<Register/>}/>


    </Routes>
}