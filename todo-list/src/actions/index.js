/*
 * Action types
 */

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const REMOVE_TASK = 'REMOVE_TASK'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'


/*
 * Other constants
 */

export const VisibilityFilters = {

    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'

}


/*
 
 * Action creators 
 
 */


let id = 0

export const addTodo = text => ({
    type: ADD_TODO,
    id: id++,
    text,
})

export const toggleTodo = index => ({
    type: TOGGLE_TODO,
    index
})

export const setVisiblilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
})

export const removeTask = index => ({
    type: REMOVE_TASK,
    index
})