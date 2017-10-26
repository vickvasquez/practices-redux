export const FETCH_GIFS = 'FETCH_GIFS'
export const RECEIVE_GIFS = 'RECEIVE_GIFS'
export const DETAIL_GIF = 'DETAIL_GIF'
export const SEARCH_GIF = 'SEARCH_GIF'

export const requestGifs = gif => ( {
    type: FETCH_GIFS,
    gif,
} )

const receiveGifs = gifs => ( {
    type: RECEIVE_GIFS,
    gifs,
} )

export const searchGif = gif => ( {
    type: SEARCH_GIF,
    gif,
} )

const fetchGifs = gif => ( dispatch ) => {
    dispatch( requestGifs( gif ) )
    fetch( `https://api.giphy.com/v1/gifs/search?api_key=Upt3ithshjn878hXcP4xha6ysCIweqID&q=${ gif }&limit=100&offset=0&rating=G&lang=es` )
        .then( data => data.json() )
        .then( gifs => dispatch( receiveGifs( gifs ) ) )
}

export const getGifs = gifSearch => ( dispatch, getState ) => {
    const prevState = getState()

    const { gif, data } = prevState.data

    if ( gif !== gifSearch || !data.length ) {
        return dispatch( fetchGifs( gifSearch ) )
    }

    return prevState
}
