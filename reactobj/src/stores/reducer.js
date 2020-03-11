import {
    CHANGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    DELETE_ITEM
} from './actionType'
const defaultState = {
    inputValue: '',
    list: ['111', '2222']
}
// reducer 只能接受state，不能修改state
export default (state = defaultState, action) => {
    console.log(state, action)
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    } else if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    } else if (action.type === DELETE_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    return state;
}