import React, { Component } from 'react'

export default class CounterClass extends Component {
    constructor(props){
        //this line calls the constructor of the parent class,
        //enabling the component to use this to refer itself.
        //used to call and access props of the parents
        super(props)
        //stores all the states
        this.state={
            count: 0
        }
    }

    handleIncrement = () => {
        //increment the count, change the state
        this.setState({
            count: this.state.count+1
        })
    }

    handleDecrement = () => {
        //decrement the count, changestate
        this.setState({
            count: this.state.count-1
        })
    }

  render() {
    return (
      <div>
        <button onClick={this.handleIncrement}>+</button>
        {/* <p>{this.props.count}</p> */}
        <p>{this.state.count}</p>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    )
  }
}
