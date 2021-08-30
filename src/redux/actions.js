
import { SAVE_COMPLETE, SAVE_ERR, SAVE_START, SET_DETAIL, SET_USER } from "./constants";
import { SET_TEMPLATE } from "./constants";
import { firestore } from "../firebase";
export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const setTemplate = (template) => {
  return {
    type: SET_TEMPLATE,
    template: template,
  }
}

export const setDetail = (detail) => {
  return {
    type: SET_DETAIL,
    payload: detail,
  }
}

export const saveStart = () => {
  return {
    type: SAVE_START
  }
}

export const saveCompleted = (id) => {
  return {
    type: SAVE_COMPLETE,
    payload: id,
  }
}

export const saveErr = (err) => {
  return {
    type: SAVE_ERR,
    payload: err
  }
}

export const saveResume = (uid, resume, template) => {
  return function (dispatch) {
    dispatch(saveStart());
    firestore.collection("resume").add({ // resume naam ki collection mai ek naya document banyega aur ye sab add kar dega usme
      uid, ...resume, template
    }).then((docRef) => {
      return docRef.get();
    }).then((doc) => {
      dispatch(saveCompleted(doc.id))
    }).catch((err) => {
      dispatch(saveErr(err));
    })
  }
}