import * as types from './actionTypes';

export const fetchItem = () => {
  return (dispatch) => {
    dispatch({ type: types.LOADING_ITEM });
  }
}