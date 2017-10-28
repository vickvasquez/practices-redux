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
    let paginaInicial = 0

    if( pages === 0 || pages <= 0 )
        return ''

    if ( ( page - limitPagination ) < 0 ) {
        paginaInicial = 1
    } else if ( page + limitPagination >= pages ) {
        console.log( ' Sumatoria' +  ( page +  limitPagination ) )
        paginaInicial = pages - 9
        console.log( 'Pagina inicial ' + paginaInicial )
        console.log( 'Paginas '+ pages )
    } else {
        paginaInicial = page - 5
    }

    return (
        <ul className={ estilos.pagination }>
            <li className={ estilos.itemPagination } disabled={ page === 1 ? 'true' : 'false' } onClick={ e => onClick( 1 ) }> Inicio </li>
            <li className={ estilos.itemPagination } disabled={ page === 1 ? 'true' : 'false' } onClick={ e => onClick( page - 1 ) }> Anterior </li>
            {
                [ ...Array( limitPagination ) ]
                    .map( ( ) => {
                        const className = ( page === paginaInicial ) ? estilos.pageCurrent : estilos.itemPagination

                        paginaInicial += 1
                        counter += 1

                        return (
                            <li
                                key={ counter }
                                className={ className }
                                onClick={ e => onClick( e.target.innerHTML ) }
                            >
                                { paginaInicial - 1}
                            </li>
                        )
                    } )
            }
            <li className={ estilos.itemPagination } disabled={ page === pages ? 'true' : 'false' }  onClick={ e => onClick( page + 1 ) }> Siguiente </li>
            <li className={ estilos.itemPagination } disabled={ page === pages ? 'true' : 'false' }  onClick={ e => onClick( pages ) }> Fin </li>
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
