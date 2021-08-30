
import { SAVE_COMPLETE, SAVE_ERR, SAVE_START, SET_DETAIL, SET_TEMPLATE, SET_USER } from "./constants";

let userReducer = (state = null, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};

export const templateReducer=(state=null, action)=>{
  switch(action.type){
    case SET_TEMPLATE:
      return action.template;
    default :
      return state;
  }
}

let initialState = {
  fname: "",
  lname: "",
  address: "",
  city: "",
  state: "",
  phone: "",
  degree: "",
  specialization :"",
  college: "",
  passOutYear: "",
  email: "",
  cgpa: "",
  isPublic: false,
};

export const detailReducer=(state=initialState, action)=>{
  switch(action.type){
    case SET_DETAIL : 
      return {
        ...state,
        ...action.payload // kyunki wahan se object karunga dispatch ke sath
      }
    default :
      return state;
  }
}

let saveState={
  loading : null,
  id : "", 
  err: null
}

export const saveReducer=(state=saveState, action)=>{
  switch(action.type){
    case SAVE_START:
      return {
        ...state, 
        loading : true,
      }
    case SAVE_COMPLETE : 
      return {
        ...state, 
        loading : false,
        id : action.payload
      }
    case SAVE_ERR: 
      return {
        ...state,
        err : action.payload
      }
    default :
      return state;
  }
}

export default userReducer;
