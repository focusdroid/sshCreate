import React, { Component } from 'react'
import { connect } from 'react-redux'

class TodoList extends Component{
  render(){
    return (
      <div>
        <input
          type="text"
          onChange={this.props.changeValue}
          value={this.props.inputValue}/>
        <button onClick={this.props.addItem}>add</button>
        <div>
          <ul>
            <li>jnkjn</li>
            <li>jnkjn</li>
            <li>jnkjn</li>
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  inputValue: state.inputValue
})

const mapDispatchToProps = (dispatch) => ({
  changeValue (e) {
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    dispatch(action)
  },
  addItem () {
    const action = {
      type
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)