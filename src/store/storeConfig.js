import { createStore, combineReducers } from 'redux';

import { reducerChangeNumber } from './reducers/changeNumber';
import { exampleReducerNames } from './reducers/example';



const reducers = combineReducers({
    numbers: reducerChangeNumber,
    names: exampleReducerNames
});



export default createStore(reducers);