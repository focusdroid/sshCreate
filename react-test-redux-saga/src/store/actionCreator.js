import {
    changeInputValue,
    addItem,
    deleteItem,
    getinitlist,
    initAxiosObj
} from './actionTypes'

export const changeInputValueAction = (value) => ({
    type: changeInputValue,
    value
})

export const addItemAction = () => ({
    type: addItem
})

export const deleteItemAction = (i) => ({
    type: deleteItem,
    i
})

export const getInitList = () => ({
    type: getinitlist
})

export const initAxiosObjData = (data) => ({
    type: initAxiosObj,
    data
})