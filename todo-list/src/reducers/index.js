import {
    VisibilityFilters,
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER
} from '../actions/'


import {
    combineReducers
} from 'redux'


const {
    SHOW_ALL
} = VisibilityFilters



const visibilityFilter = (state = SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }

}

const todos = (state = [], action) => {
    switch (action.type) {

        case ADD_TODO:

            return [
                ...state, {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]

        case TOGGLE_TODO:
            /*
            return state.map((todo, index) => {

                if (index === action.index) {

                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }

                return todo
            })*/

            return state.map(todo =>
                (todo.id === action.index) ? {...todo,
                    completed: !todo.completed
                } : todo
            )
        default:
            return state

    }

}


//Combina los reductores

/*
function todoApp(state = initialState, action) {

    console.log(action)

    // switch (action.type) {

    //     case SET_VISIBILITY_FILTER:

    //         return Object.assign({}, state, {
    //             visibilityFilter: action.filter
    //         })


    //         break

    //     case ADD_TODO:
    //     case TOGLE_TODO:
    //         return Object.assign({}, state, {
    //             todos: todos(state.todos, action)
    //         })
    //         break

    //     default:
    //         return state
    // }

    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action)
        todos: todos(state.todos, action)
    }

}*/


const todoApp = combineReducers({
    visibilityFilter,
    todos
})


export default todoApp