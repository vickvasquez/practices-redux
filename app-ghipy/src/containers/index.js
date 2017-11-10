import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getGifs, searchGif, nextPage } from '../actions'
import Gif from '../components/Gifs'
import SearchBox from '../components/SearchBox'
import NotFound from '../components/NotFound'
import Pagination from 'react-pagination-component'
import Styles from './container.css'

const showResult = (data, gif, page, pages) => (
    data.length
        ? <Gif
            gifs={data}
            value={gif}
            page={page}
            pages={pages}
        />

        : <NotFound />
)

class App extends Component {
    constructor(props) {
        super(props)
        this.searchGif = this.searchGif.bind(this)
        this.nextPage = this.nextPage.bind(this)
    }

    componentDidMount() {
        this.props.dispatch(getGifs(this.props.gif))
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.gif !== this.props.gif || nextProps.page !== this.props.page) {
            this.props.dispatch(getGifs(nextProps.gif))
        }
    }

    nextPage(page) {
        if (page > 0 && page <= this.props.pages) {
            this.props.dispatch(nextPage(parseInt(page, 10)))
        }
    }

    searchGif(e) {
        if (e.which === 13) {
            e.preventDefault()

            const param = e.target.value

            if (param !== '') {
                e.target.value = ''
                this.props.dispatch(searchGif(param))
            }
        }
    }

    render() {
        const {
            isLoading,
            data,
            gif,
            page,
            pages,
        } = this.props
        return (
            <div className={Styles.container}>

                <SearchBox onKeyPress={this.searchGif} />

                {
                    isLoading
                        ? <h1>Cargando gifs...</h1>
                        : showResult(data, gif, page, pages)
                }

                <Pagination
                    pages={pages}
                    page={page}
                    onClick={this.nextPage}
                />

            </div>
        )
    }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
    gif: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
    pages: PropTypes.number.isRequired,
}

const mapStateToProps = (state) => {
    const { gif } = state

    const {
        data,
        isLoading,
        page,
        pages,
    } = state.data

    return {
        data,
        gif,
        isLoading,
        page,
        pages,
    }
}

/*
* La otra forma de manejar el dispatch es crear un mapDispatchToProps
* Dentro del dispatch ejecutar un action creator
*
* const mapDispatchToProps = dispatch => ({ getGifs:( gif ) => dispatch( getGif(gif) ) })
*
*/

export default connect(mapStateToProps)(App)
