import React, { Component, Fragment } from 'react'
import { Input, Button,  List } from 'antd';
import store from '../store/index'
import {
    changeInputValueAction,
    addItemAction,
    deleteItemAction,
    getInitList
} from '../store/actionCreator'
import axios from 'axios'
export default class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.getChangeState = this.getChangeState.bind(this)
        store.subscribe(this.getChangeState)
    }
    render() {
        return(<Fragment>
            <div style={{padding: 30}}>
                <Input onChange={this.ChangeInputValue} value={this.state.inputValue} placeholder={'todo info'} style={{width: 300, marginRight: 30}}/>
                <Button type={'primary'} onClick={this.addItem}>增加</Button>
                <List
                    style={{width: 400, marginTop: 10}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,i) => (
                        <List.Item>
                            <p key={i} onClick={this.deleteItem.bind(this,i)}>{item}</p>
                        </List.Item>
                    )}
                />
            </div>
        </Fragment>);
    }
    componentDidMount () {
        const action = getInitList()
        store.dispatch(action)
    }
    getChangeState () {
        this.setState(store.getState())
    }
    ChangeInputValue (e) {
        const action = changeInputValueAction(e.target.value)
        store.dispatch(action)
    }
    addItem () {
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem (i) {
        const action = deleteItemAction(i)
        store.dispatch(action)
    }
}