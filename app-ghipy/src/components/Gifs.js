import React from 'react'
import PropTypes from 'prop-types'
import GifCss from './Gif.css'

const Gif = ( { gifs, value } ) => (
    <div className={ GifCss.grid }>
        {
            gifs.map( ( gif ) => {
                const imgGif = gif.images.preview_gif.url

                return (
                    <a href={ gif.slug } className={ GifCss.itemImage } key={ gif.id }>
                        <img src={ imgGif } alt={ value } />
                    </a>
                )
            } )
        }
    </div>
)

Gif.propTypes = {
    gifs: PropTypes.arrayOf( PropTypes.array ).isRequired,
    value: PropTypes.string.isRequired,
}

export default Gif
