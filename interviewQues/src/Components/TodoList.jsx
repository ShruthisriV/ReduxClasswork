import React, { Component } from 'react'
import { useEffect } from 'react';

export default class TodoList extends Component {
    constructor(props){
        super(props)
        this.state={
            todos: [],
            currTodo: "",
        };
        console.log("Constructor: setting up initial state and bindin");
    }

    //it is used to perform all the side effect functions, API, making a DB call,
    //called only once, after component is mounted for the very first time.
    componentDidMount(){
        console.log("Component Did Mount: Fetching initial to-do items");
        setTimeout(()=> {
            this.setState({todos: ["Learn React", "Read a Book"]})
        }, 1000)
    }
    
    //when a state changes, this method is called
    componentDidUpdate(prevProps, prevState){
        console.log("Component Did update: checking if new to-do was added")
        if(prevState.todos!=this.state.todos){
            console.log("Updated To-dos: ", this.state.todos);
        }
        else if(prevState.currTodo != this.state.currTodo){
            console.log("currTodo state has been changed");
        }
    }

    //called just before the state is about to be updated, this return true or false depending if the state should be updated or not
    shouldComponentUpdate(){
        console.log("I am called before updating a state");
        return true;
    }

    //called everytime whenever the states mentioned in dependency array is changed
    // useEffect(() => {

    // },[todos, currTodo])

    //called everytime when a state is changed
    // useEffect(() => {

    // })

    //called just before the comp is removed from the DOM. it is used for cleanup, like cancelling network requests or removing event listeners
    componentWillUnmount(){
        console.log('Compoenent Will Unmount: Cleaning up resources');
    }

    handleInputChange = (e) => {
        this.setState({
            currTodo: e.target.value
        })
    }

    handleAddTodo = () => {
        this.setState({
            todos: [...this.state.todos, this.state.currTodo],
            currTodo:""
        })
    }

  render() {
    console.log("Render: Rendering the todo list")
    return (
      <div>
        <h1>My To-Do List</h1>
        <input type='text' placeholder='Enter your tasks...'
            value={this.state.currTodo} onChange={this.handleInputChange}/>
        <button onClick={this.handleAddTodo}>Add To-Do</button>
        <ul>
            {
                this.state.todos.map((todo, idx) => (
                    <li key={idx}>{todo}</li>)
                )
            }
        </ul>
      </div>
    )
  }
}
