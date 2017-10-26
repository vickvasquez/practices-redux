import { combineReducers } from 'redux'
import { FETCH_GIFS, RECEIVE_GIFS, SEARCH_GIF } from '../actions'

const searchGif = ( state = 'goku dbz', action ) => {
    switch ( action.type ) {
    case SEARCH_GIF:
        return action.gif
    default:
        return state
    }
}

const gifs = ( state = {
    isLoading: false,
    data: [],
}, action ) => {
    switch ( action.type ) {
    case FETCH_GIFS:
        return {
            ...state,
            isLoading: true,
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
    gif: searchGif,
} )

export default reducer
