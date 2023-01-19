const INITIAL_STATE = {
    min: 2,
    max: 15
}



export function reducerChangeNumber(state = INITIAL_STATE, action) {

    switch(action.type) {
        case 'CHANGE_MAX':
            return {
                ...state,
                max: action.payload
            }
        
        case 'CHANGE_MIN':
            return {
                ...state,
                min: action.payload
            }
        
        default:
            return state;
    }
}