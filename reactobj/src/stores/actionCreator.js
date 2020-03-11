import {
    CHANGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    DELETE_ITEM
} from './actionType'

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
})

export const deleteTodoItem = (index) => ({
    type: DELETE_ITEM,
    index
})