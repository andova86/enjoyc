import * as t from "../types";


export const setInfo = (name) => dispatch => dispatch({
  type: t.SET_NAME,
  payload: name
});

export const setData = (data) => dispatch => dispatch({
  type: t.SET_DATA,
  payload: data
});



