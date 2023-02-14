import React, { useReducer, useState } from "react";
import DataTodo from './DataTodo'

export const ACTIONS = {
    ADD_TODO: "add todo",
    TOGGLE_TODO: "toggle_todo",
    DELETE_TODO: "delete_todo",
    EDIT_TODO: "edit_todo"
}

function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.formData)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete }
                }
                return todo
            })
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)
        case ACTIONS.EDIT_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, fname: "hellooo", addr: "heyy" }
                }
                return todo
            })
        default:
            return todos
    }
}

function newTodo(formData) {
    return {
        id: Date.now(),
        fname: formData.fname,
        addr: formData.addr,
        complete: false
    }
}

function Reform() {

    const [todos, dispatch] = useReducer(reducer, [])
    const [formData, setFormdata] = useState({
        fname: "",
        addr: "",
    })

    const HandleChange = (e) => {
        setFormdata({ ...formData, [e.target.name]: e.target.value })
    }

    const Submitform = (e) => {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: { formData: formData } })
        setFormdata({
            fname: "",
            addr: ""
        })
    }
    console.log(todos)

    return (
        <div className="content">
            <form onSubmit={Submitform}>
                <label>Name : </label>
                <input
                    type='text'
                    value={formData.fname}
                    name="fname"
                    onChange={HandleChange}
                />

                <label>Address :</label>
                <input
                    type='text'
                    value={formData.addr}
                    name="addr"
                    onChange={HandleChange}
                />

                <button>Submit</button>

            </form>
            {todos.map(data => {
                return <DataTodo key={data.id} todo={data} dispatch={dispatch} />
            })}
        </div>
    )
}

export default Reform