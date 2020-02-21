import * as types from '../actions/actionTypes';

const initialState = {
  loading: false,
  loaded: false,
  item: null
}

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING_ITEM:
      return {
        ...state,
        loading: true,
        loaded: false
      }
    case types.SET_ITEM:
      return {
        ...state,
        loading: false,
        loaded: true,
        item: action.item
      }
    // TODO once component is created
    // case types.FETCH_USER_ITEM:
    //   return { ...state, item: action.item }
    default:
      return state;
  }
}

export default itemReducer;