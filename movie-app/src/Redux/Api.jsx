import axios from "axios"
import { MovieData } from "./Action"


export const fetchData=()=>async(dispatch)=>{
   
        try {
          await axios.get("http://localhost:8000/")
          .then((res)=>{
            dispatch(MovieData(res.data.users[0].Search))
        //   setData(res.data.users[0].Search)
        //   console.log(res.data.users[0].Search)
          })
        } catch (error) {
          console.log(error)
        }
}

// page,value,order
export const TicketData=()=>async(dispatch)=>{
   try {
    const response= await axios.get(``,{
      headers:{
         'Content-Type': 'application/json',
         'Authorization':`Bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    })
    
   console.log(response.data)
       dispatch(TicketData(response.data))

        
 
   } catch (error) {
      
      console.log(error)
   }
}



 
 