import React from 'react'
import PropTypes from 'prop-types'
import GifCss from './Gif.css'

const Gif = ({
    gifs,
    value,
    page,
    pages,
}) => (
    <div>
        <h2> <strong> { value } </strong>  </h2>

        <p> Resultados encontrados { page } / { pages }</p>

        <div className={GifCss.grid}>
            {

                gifs.map((gif) => {
                    const imgGif = gif.images.preview_gif.url

                    return (
                        <a href={gif.slug} className={GifCss.itemImage} key={gif.id}>
                            <img src={imgGif} alt={gif.slug} />
                        </a>
                    )
                })
            }
        </div>
    </div>
)

Gif.propTypes = {
    gifs: PropTypes.arrayOf(PropTypes.object).isRequired,
    value: PropTypes.string.isRequired,
    pages: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
}

export default Gif
