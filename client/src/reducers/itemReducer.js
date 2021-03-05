import * as types from '../actions/actionTypes';

const initialState = {
    loading: false,
    loaded: false,
    items: [],
    item: null
}

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOADING_SINGLE_ITEM:
        case types.LOADING_ALL_ITEMS:
            return {
                ...state,
                loading: true,
                loaded: false
            };
        case types.SET_ALL_ITEMS:
            return {
                ...state,
                loading: false,
                loaded: true,
                items: action.items
            };
        case types.GET_SINGLE_ITEM:
            return {
                ...state,
                loading: false,
                loaded: true,
                item: action.item
            };
        case types.SET_SINGLE_ITEM:
            return {
                ...state,
                loading: false,
                loaded: true,
                items: [ ...state.items, action.item ],
                item: action.item
            };
        case types.UPDATE_SINGLE_ITEM:
            console.log('initial:')
            console.log(state.items);
            let newItems = state.items.map((item, i) => {
                if (item._id === action.item._id) {
                    item = action.item;
                }
                return item;
            });
            console.log('altered:')
            console.log(newItems);
            return {
                ...state,
                loading: false,
                loaded: true,
                items: newItems,
                item: action.item
            };
        // TODO: after users are created
        // case types.FETCH_USER_ITEM:
        //   return { ...state, item: action.item }
        default:
            return state;
    }
}

export default itemReducer;
