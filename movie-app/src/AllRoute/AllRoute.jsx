import {Navigate, Route, Routes} from 'react-router-dom'
import { Movies } from '../Component/Movies'
import { BookingDetails } from '../Component/BookingDetails'
import { Register } from '../Component/Register'
import { useSelector } from 'react-redux'


export const AllRoute=()=>{
    const token=JSON.parse(sessionStorage.getItem("token"))
    const {login}=useSelector((store)=>store)
    console.log(login)
    return <Routes>

     <Route path='/' element={<Movies/>}/>
     <Route path='/bookingdetails/:id' element={login||token?<BookingDetails/>:<Navigate to={'/register'}/>}/>
     <Route path='/register' element={<Register/>}/>


    </Routes>
}