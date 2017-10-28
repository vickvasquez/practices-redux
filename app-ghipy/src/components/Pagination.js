import React from 'react'
import PropTypes from 'prop-types'
import estilos from './estilos.css'

const Pagination = ( {
    pages,
    page,
    onClick,
    limitPagination,
} ) => {
    let counter = 0
    let initialPage = 0

    if ( pages === 0 || pages <= 0 ) {
        return ''
    }

    if ( ( page - limitPagination ) < 0 ) {
        initialPage = 1
    } else if ( page + limitPagination >= pages ) {
        initialPage = pages - ( limitPagination - 1 )
    } else {
        initialPage = page - 5
    }

    return (
        <ul className={ estilos.pagination }>

            <button
                className={ estilos.itemPagination }
                disabled={ page === 1 }
                onClick={ ( ) => onClick( 1 ) }
            >
                Inicio
            </button>

            <button
                className={ estilos.itemPagination }
                disabled={ page === 1 }
                onClick={ ( ) => onClick( page - 1 ) }
            >
                Anterior
            </button>

            {
                [ ...Array( limitPagination ) ]
                    .map( ( ) => {
                        const className = ( page === initialPage )
                            ? estilos.pageCurrent
                            : estilos.itemPagination

                        initialPage += 1
                        counter += 1

                        return (
                            <button
                                key={ counter }
                                className={ className }
                                onClick={ e => onClick( e.target.innerHTML ) }
                            >
                                { initialPage - 1 }
                            </button>
                        )
                    } )
            }

            <button
                className={ estilos.itemPagination }
                disabled={ page === pages }
                onClick={ ( ) => onClick( page + 1 ) }
            >
                Siguiente
            </button>

            <button
                className={ estilos.itemPagination }
                disabled={ page === pages }
                onClick={ ( ) => onClick( pages ) }
            >
                Fin
            </button>

        </ul>
    )
}

Pagination.propTypes = {
    pages: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    limitPagination: PropTypes.number.isRequired,
}

export default Pagination
