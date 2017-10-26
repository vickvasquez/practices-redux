import { combineReducers } from 'redux'
import { FETCH_GIFS, RECEIVE_GIFS } from '../actions'

const gifs = ( state = {
    isLoading: false,
    data: [],
    gif: 'Goku',
}, action ) => {
    switch ( action.type ) {
    case FETCH_GIFS:
        return {
            ...state,
            isLoading: true,
            gif: action.gif,
        }

    case RECEIVE_GIFS:
        return {
            ...state,
            isLoading: false,
            data: action.gifs.data,
        }

    default:
        return state
    }
}

const reducer = combineReducers( {
    data: gifs,
} )

export default reducer
