import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getGifs } from '../actions'
import Gif from '../components/Gifs'

class App extends Component {
    componentDidMount() {
        this.props.dispatch( getGifs( 'goku' ) )
    }

    render() {
        const { isLoading, data } = this.props
        return (
            <div>
                { isLoading &&
                    <h1>Cargando gifs...</h1>
                }

                <Gif gifs={ data } />
            </div>
        )
    }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    data: PropTypes.arrayOf( PropTypes.object ).isRequired,
    isLoading: PropTypes.bool.isRequired,
}

const mapStateToProps = ( state ) => {
    const { data, isLoading } = state.data

    return {
        data,
        isLoading,
    }
}

export default connect( mapStateToProps )( App )
