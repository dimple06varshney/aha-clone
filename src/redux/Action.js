import { ADD_DATA, ADD_LANG, ADD_LOGIN, ADD_PAYMENT } from "./ActionTypes"


export const addLogin = (payload)=>{
    return {
        type:ADD_LOGIN,
        payload
    }
}

export const addLang = (payload)=>{
    return{
        type:ADD_LANG,
        payload
    }
}

export const addPayment = (payload)=>{
    return {
        type:ADD_PAYMENT,
        payload
    }
}

export const addData = (payload)=>{
    return {
        type:ADD_DATA,
        payload
    }
}