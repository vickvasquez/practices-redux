import React from 'react'
import PropTypes from 'prop-types'
import estilos from './estilos.css'

const Pagination = ( { pages, page, onClick } ) => {
    let counter = 0
    return (
        <ul className={ estilos.pagination }>
            {
                [ ...Array( pages ) ]
                    .map( ( ) => {
                        const className = ( page === counter + 1 ) ? estilos.pageCurrent : estilos.itemPagination
                        counter += 1

                        return (
                            <li
                                key={ counter }
                                className={ className }
                                onClick={ e => onClick( e.target.innerHTML ) }
                            >
                                { counter }
                            </li>
                        )
                    } )
            }
        </ul>
    ) }

Pagination.propTypes = {
    pages: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Pagination
