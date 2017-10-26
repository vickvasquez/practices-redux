import React from 'react'
import PropTypes from 'prop-types'
import GifCss from './Gif.css'

const Gif = ( { gifs, value } ) => (
    <div>
        <p> Resultados encontrados relacionados con <strong> { value } </strong> </p>
        <div className={ GifCss.grid }>
            {

                gifs.map( ( gif ) => {
                    const imgGif = gif.images.preview_gif.url

                    return (
                        <a href={ gif.slug } className={ GifCss.itemImage } key={ gif.id }>
                            <img src={ imgGif } alt={ gif.slug } />
                        </a>
                    )
                } )
            }
        </div>
    </div>
)

Gif.propTypes = {
    gifs: PropTypes.arrayOf( PropTypes.array ).isRequired,
    value: PropTypes.string.isRequired,
}

export default Gif
