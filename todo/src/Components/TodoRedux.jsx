import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TodoSlice from '../redux/TodoSlice';

const actions = TodoSlice.actions;

function TodoRedux() {
    const dispatch=useDispatch();
    const {value, todoList:list} = useSelector((store) => {
        return store.todoState
    })

    const handleChange = (e) => {
        //update my value
        const newValue = e.target.value
        dispatch(actions.setValue(newValue));
    }

    const handleAddTask = () => {
        dispatch(actions.addTask(value));
    }

  return (
    <>
        <div>Todo</div>
        <div className="inputBox">
            <input type="text" 
            placeholder="Add your tasks"
            value={value}
            onChange={handleChange}
            />
            <button onClick={handleAddTask}>Add</button>
        </div>
        <div className="list">
            <ul>
                {list.map((task, id) => {
                    return <li key={id}>{task}</li>
                })}
            </ul>
        </div>
    </>
  )
}

export default TodoRedux