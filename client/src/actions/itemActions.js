import * as types from './actionTypes';
import api from '../api';

export const fetchAllItems = () => {
    return (dispatch) => {
        dispatch({ type: types.LOADING_ALL_ITEMS });

        return api.getAllItems()
            .then(resp => {
                const items = resp.data.data;
                dispatch({
                    type: types.SET_ALL_ITEMS,
                    isLoading: false,
                    items,
                })
            });
    }
}

export const fetchSingleItem = () => {
    return (dispatch) => {
        dispatch({ type: types.LOADING_SINGLE_ITEM });
    }
}

// export const deleteSingleItem = () => {
//     return (dispatch) => {
//         dispatch({ type: types.LOADING_ITEM });
//     }
// }
