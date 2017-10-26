import React from 'react'
import PropTypes from 'prop-types'

const Gif = ( { gifs } ) => (
    <div>
        {
            gifs.map( ( gif ) => {
                const imgGif = gif.images.preview_gif.url

                return (
                    <div key={ gif.id }>
                        <img src={ imgGif } alt="X" />
                    </div>
                )
            } )
        }
    </div>
)

Gif.propTypes = {
    gifs: PropTypes.arrayOf( PropTypes.array ).isRequired,
}

export default Gif
