import { GET_AUTH_DATA, GET_LOGIN, GET_MOVIE_DATA, GET_TICKET_DATA } from "./ActionType"

export const MovieData=(payload)=>{
    return {type:GET_MOVIE_DATA, payload:payload}
}

export const TicketData=(payload)=>{
    return {type:GET_TICKET_DATA, payload:payload}
}

export const AuthData=(payload)=>{
    return {type:GET_AUTH_DATA,payload:payload}
}

export const LOGIN=(payload)=>{
    return {type:GET_LOGIN,payload:payload}
}
