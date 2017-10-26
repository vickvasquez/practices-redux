import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getGifs, searchGif } from '../actions'
import Gif from '../components/Gifs'
import SearchBox from '../components/SearchBox'
import NotFound from '../components/NotFound'
import Styles from './container.css'

const showResult = data => (
    data.length ? <Gif gifs={ data } value="Goku" /> : <NotFound />
)

class App extends Component {
    constructor( props ) {
        super( props )
        this.searchGif = this.searchGif.bind( this )
    }

    componentDidMount() {
        this.props.dispatch( getGifs( this.props.gif ) )
    }

    componentWillReceiveProps( nextProps ) {
        if ( nextProps.gif !== this.props.gif ) {
            this.props.dispatch( getGifs( nextProps.gif ) )
        }
    }

    searchGif( e ) {
        if ( e.which === 13 ) {
            e.preventDefault()

            const param = e.target.value

            if ( param !== '' ) {
                e.target.value = ''
                this.props.dispatch( searchGif( param ) )
            }
        }
    }

    render() {
        const { isLoading, data } = this.props
        return (
            <div className={ Styles.container }>

                <SearchBox onKeyPress={ this.searchGif } />

                {
                    isLoading ? <h1>Cargando gifs...</h1> : showResult( data )
                }

            </div>
        )
    }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    data: PropTypes.arrayOf( PropTypes.object ).isRequired,
    isLoading: PropTypes.bool.isRequired,
    gif: PropTypes.string.isRequired,
}

const mapStateToProps = ( state ) => {
    const { gif } = state

    const {  data, isLoading } = state.data

    return {
        data,
        gif,
        isLoading,
    }
}

export default connect( mapStateToProps )( App )
