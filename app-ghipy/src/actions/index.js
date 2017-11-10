export const FETCH_GIFS = 'FETCH_GIFS'
export const RECEIVE_GIFS = 'RECEIVE_GIFS'
export const NEXT_PAGE = 'NEXT_PAGE'
export const SEARCH_GIF = 'SEARCH_GIF'
export const LOAD_GIFS = 'LOAD_GIFS'

export const requestGifs = () => ({
    type: FETCH_GIFS,
})

const receiveGifs = gifs => ({
    type: RECEIVE_GIFS,
    gifs,
})

export const nextPage = page => ({
    type: NEXT_PAGE,
    page,
})

export const searchGif = gif => ({
    type: SEARCH_GIF,
    gif,
})

const fetchGifs = gif => (dispatch, getState) => {
    const state = getState()

    const { page, limit } = state.data

    dispatch(requestGifs(gif))

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=Upt3ithshjn878hXcP4xha6ysCIweqID&q=${ gif }&limit=${ limit }&offset=${ page }&rating=G&lang=es`)
        .then(data => data.json())
        .then(gifs => dispatch(receiveGifs(gifs)))
}

export const getGifs = gifSearch => dispatch => dispatch(fetchGifs(gifSearch))
