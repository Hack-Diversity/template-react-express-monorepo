import * as types from './actionTypes';
import api from '../api';

export const fetchAllItems = () => {
    return (dispatch) => {
        dispatch({ type: types.LOADING_ALL_ITEMS });

        return api.getAllItems()
            .then(resp => {
                const items = resp.data.data;
                console.log("getAllItems: resp");
                console.log(items);
                dispatch({
                    type: types.SET_ALL_ITEMS,
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

export const insertSingleItem = item => {
    return (dispatch) => {
        dispatch({ type: types.LOADING_SINGLE_ITEM });

        return api.insertItem(item)
            .then(resp => {
                console.log("insertItem: resp");
                console.log(resp);
                if ((resp.data || {}).success) {
                    const newItem = JSON.parse(resp.config.data);
                    dispatch({
                        type: types.SET_SINGLE_ITEM,
                        item: {
                            _id: resp.data.id,
                            ...newItem
                        }
                    });
                }
                return resp;
            });
    }
}

export const deleteSingleItem = itemId => {
    return (dispatch) => {
        dispatch({ type: types.LOADING_SINGLE_ITEM });

        return api.deleteItemById(itemId)
            .then(resp => {
                console.log("deleteItemById: resp");
                console.log(resp);
                dispatch({
                    type: types.RELOAD_ITEMS
                })
                return resp;
            })
    }
}
