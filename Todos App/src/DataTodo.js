import React from 'react'
import {ACTIONS} from './Reform'

export default function DataTodo({todo, dispatch}) {
  return (
    <div className='content'>
        <div style={{color: todo.complete ? '#AAA' : "#000"}}>{todo.fname}</div>
        <div style={{color: todo.complete ? '#AAA' : "#000"}}>{todo.addr}</div>
        <button onClick={() => dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})}>Toggle</button>
        <button onClick={() => dispatch({type: ACTIONS.DELETE_TODO, payload: {id: todo.id}})}>Delete</button>
        <button onClick={() => dispatch({type: ACTIONS.EDIT_TODO, payload: {id: todo.id}})}>Edit</button>
    </div>
  )
}
