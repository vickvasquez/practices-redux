import { combineReducers } from 'redux'
import { FETCH_GIFS, RECEIVE_GIFS, SEARCH_GIF, NEXT_PAGE } from '../actions'

const searchGif = (state = ' trending ', action) => {
    switch (action.type) {
    case SEARCH_GIF:
        return action.gif
    default:
        return state
    }
}

const gifs = (state = {
    isLoading: false,
    data: [],
    limit: 12,
    page: 1,
    pages: 0,
}, action) => {
    switch (action.type) {
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
            pages: Math.floor(action.gifs.pagination.total_count / state.limit),
        }
    case SEARCH_GIF:
        return {
            ...state,
            page: 1,
        }
    case NEXT_PAGE:
        return {
            ...state,
            page: action.page,
        }
    default:
        return state
    }
}

const reducer = combineReducers({
    data: gifs,
    gif: searchGif,
})

export default reducer
