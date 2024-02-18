import { GET_AUTH_DATA, GET_LOGIN, GET_MOVIE_DATA, GET_TICKET_DATA } from "./ActionType"




const initialState ={
    isAuth:false,
    login:false,
    MovieData:[],
    TicketData:[],
   
  
}
console.log(initialState)


export const Reducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case GET_AUTH_DATA:{
            return {...state,isAuth: payload}
        }
        case GET_MOVIE_DATA:{
            return {
                ...state,
                MovieData: [...state.MovieData, ...payload]
            };
        }
        case GET_TICKET_DATA:{

            return {...state,isAuth:true,TicketData:payload.users}
        }


        case GET_LOGIN:{
            return {
                ...state,login:payload
            }
        }
      
        default : return state
    }
   
}