import { ADD_NOOB, SET_CURRENT, UPDATE_NOOB } from '../types'

export default (state, action) => {
    switch(action.type) {
        case ADD_NOOB:
            return {
                noobs: [...state.noobs, action.payload]
            }
        
        case SET_CURRENT: 
            return {
                ...state,
                current: action.payload
            }
        case UPDATE_NOOB:
            return {
                ...state,
                noobs: state.noobs.map(noob => noob.id === action.payload.id ? action.payload : noob),
                loading: false
            }
                
        default:
            return state
    }
}