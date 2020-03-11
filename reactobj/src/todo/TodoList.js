import React, { Component } from 'react';
import { Button, Input } from 'antd'
import store from '../store/index'
import {
    gethandleBtnClick,
    gethandleChangeValue,
    getdeleteItem,
    getTodoList
} from '../store/actionCreator'


export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.getStateData = this.getStateData.bind(this)
        store.subscribe(this.getStateData)

        this.handleChangeValue = this.handleChangeValue.bind(this)
    }
    render () {
        return (
            <div>
                <Input
                    placeholder={'todo info'}
                    onChange={this.handleChangeValue}
                    value={this.state.inputValue}
                    style={{'width':300}}/>
                <Button onClick={this.handleBtnClick}>添加信息</Button>
                <ul>
                    {this.state.list.map((item, i) => {
                        return <li key={i} onClick={this.deleteItem.bind(this, i)}>{item}</li>
                    })}
                </ul>
            </div>
        )
    }
    componentDidMount () {
        const action = getTodoList()
        store.dispatch(action)
    }

    getStateData () {
        this.setState(store.getState())
    }
    handleBtnClick () {
        const action = gethandleBtnClick()
        store.dispatch(action)
    }
    handleChangeValue (e) {
        const action = gethandleChangeValue(e.target.value)
        store.dispatch(action)
    }
    deleteItem (index) {
        const action = getdeleteItem(index)
        store.dispatch(action)
    }
}