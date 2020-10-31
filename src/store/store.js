import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import likefunc from '../reducers/likeReducer';
import Paper from "../reducers/postReducer";


const log = (store) => (dispatch) =>  (action) =>{
    console.log(action.type, store.getState())
    return dispatch(action);
}

const reducers = combineReducers({post: Paper, like: likefunc});
const store = createStore(reducers, composeWithDevTools(applyMiddleware(log)));


export default store;