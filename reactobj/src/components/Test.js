import React, { Component } from 'react';
import { Button,Input } from 'antd'
import store from '../stores/index'
import {
    getInputChangeAction,
    getAddItemAction,
    deleteTodoItem
} from '../stores/actionCreator'
export default class Test extends Component {
    constructor (props) {
        super(props)
        this.state = store.getState()
        console.log(this.state)
        this.HandleChange = this.HandleChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        store.subscribe(this.handleStoreChange)

        this.HandleBtnClick = this.HandleBtnClick.bind(this)
    }
    render() {
        return (
            <div>
                <Input onChange={this.HandleChange} value={this.state.inputValue} placeholder='todo info' style={{width: 300}}/>
                <Button type='primary' onClick={this.HandleBtnClick}>start</Button>
                <ul>
                    {this.state.list.map((item, index) =>{
                        return <li key={item} onClick={this.HandleDeleteItem.bind(this, index)}>{item}</li>
                    })}
                </ul>
            </div>
        )
    }
    handleStoreChange () {
        this.setState(store.getState())
    }
    HandleChange (e) {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }
    HandleBtnClick () {
        const action = getAddItemAction()
        store.dispatch(action)
    }
    HandleDeleteItem = (index) => {
        const action = deleteTodoItem(index)
        store.dispatch(action)
    }
}