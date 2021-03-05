import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './reducers/index';
import thunk from 'redux-thunk';

const configureStore = () => {
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
}

const store = configureStore();

export default store;
