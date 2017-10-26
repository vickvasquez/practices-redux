export const FETCH_GIFS = 'FETCH_GIFS'
export const RECEIVE_GIFS = 'RECEIVE_GIFS'

export const requestGifs = gif => ( {
    type: FETCH_GIFS,
    gif,
} )

const receiveGifs = gifs => ( {
    type: RECEIVE_GIFS,
    gifs,
} )

const fetchGifs = gif => ( dispatch ) => {
    dispatch( requestGifs( gif ) )
    fetch( `https://api.giphy.com/v1/gifs/search?api_key=Upt3ithshjn878hXcP4xha6ysCIweqID&q=${ gif }&limit=25&offset=0&rating=G&lang=en` )
        .then( data => data.json() )
        .then( gifs => dispatch( receiveGifs( gifs ) ) )
}

export const getGifs = gif => dispatch => dispatch( fetchGifs( gif ) )
