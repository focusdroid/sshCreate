import {
    add_item_value,
    change_value,
    delete_item,
    init_list_action
} from "./actionType";
import axios from "axios";

export const gethandleBtnClick = () => ({
    type: add_item_value
})

export const gethandleChangeValue = (value) => ({
    type: change_value,
    value
})

export const getdeleteItem = (index) => ({
    type: delete_item,
    index
})

export const initListAction = (data) => ({
    type: init_list_action,
    data
})

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('http://api.github.com').then((res) => {
            const data = res.data;
            const action = init_list_action(data)
            dispatch(action)
        })
    }
}