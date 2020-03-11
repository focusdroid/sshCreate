import {
    add_item_value,
    change_value,
    delete_item,
    init_list_action
} from './actionType'
const defaultState = {
    inputValue: '',
    list: ['中国', '西安市'],
    newList: {}
}

export default (state = defaultState, action) => {
    if (action.type === add_item_value) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    } else if (action.type === change_value) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    } else if (action.type === delete_item) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    } else if (action.type === init_list_action) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.newList = action.data
        return newState
    }
    return state
}