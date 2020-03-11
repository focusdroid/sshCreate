import {
    changeInputValue,
    addItem,
    deleteItem,
    initAxiosObj
} from './actionTypes'
const defaultState = {
    inputValue: '',
    list: [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ],
    axiosObj: {'aaaa': '123'}
}


export default (state = defaultState, action) => {
    if (action.type === changeInputValue) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    } else if (action.type === addItem) {
        const newState = JSON.parse(JSON.stringify(state))
        if (newState.inputValue) {
            newState.list.push(newState.inputValue)
            newState.inputValue = ''
        } else {
            alert('不能提交空内容')
        }
        return newState
    } else if (action.type === deleteItem) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.i, 1)
        return newState
    } else if (action.type === initAxiosObj) {
        const newState = JSON.parse(JSON.stringify(state))
        Object.assign(newState.axiosObj, action.data)
        console.log(newState)
        return newState
    }
    return state
}