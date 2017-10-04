import {
    addTodo,
    toggleTodo,
    setVisiblilityFilter,
    VisibilityFilters
} from '../actions/'


import {
    createStore
} from 'redux'


import todoApp from '../reducers/'

let store = createStore(todoApp)


console.log(store.getState())

let unsubscribe = store.subscribe(() => {
    //console.log(store.getState())
})

// Dispatch some actions
//store.dispatch(setVisiblilityFilter(VisibilityFilters.SHOW_ACTIVE))
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisiblilityFilter(VisibilityFilters.SHOW_COMPLETED))
store.dispatch(addTodo('Mira mama estoy aprendiendo redux'))

// Stop listening to state updates
unsubscribe()