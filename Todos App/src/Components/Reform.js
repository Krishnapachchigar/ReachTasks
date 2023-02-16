import React, { useContext, useReducer, useState } from 'react'
import { Name } from './Task6/Parent'

export const ACTIONS = {
    ADD_TODO: "add-todo",
    TOGGLE_TODO: "toggle-todo",
    DELETE_TODO: "delete-todo",
    EDIT_TODO: "edit-todo",
    SELECT_TODO: "select-todo",
}

function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete }
                }
                return todo
            })
        case ACTIONS.DELETE_TODO:
            return todos.filter((todo) =>
                todo.id !== action.payload.id
            )
        case ACTIONS.EDIT_TODO:
            return todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, name: action.payload.name }
                }
                return todo
            })
        case ACTIONS.SELECT_TODO:
            // return { ...todos, selectedTodoId: action.payload.id }
            return todos.map((todo) => {
                if(todo.id === action.payload.id){
                    return { ...todos, selectedTodoId: action.payload.id }
                }
                return todo
            })
        default:
            return todos
    }
}

function newTodo(name) {
    return { id: Date.now(), name: name, complete: false }
}

function Reform() {

    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState("")
    const [editingName, setEditingName] = useState("")
    const [isedit, setEdit] = useState(false)
    const value = useContext(Name)

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name } })
        setName("")
    }

    function handleEditSubmit(e) {
        e.preventDefault();
        dispatch({ type: ACTIONS.EDIT_TODO, payload: { id: todos.selectedTodoId, name: editingName } })
        setEditingName("")
        setEdit(false)
    }
    
    function handleSelect(todo) {
        setEdit(true)
        dispatch({ type: ACTIONS.SELECT_TODO, payload: { id: todo.id } })
        setEditingName(todo.name)
    }

    return (
        
        <div className='content'>
            <h2>Hello {value}!</h2>
            <form onSubmit={handleSubmit}>
                <label>Name : </label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                <button>Add</button>
            </form>

            {todos.map(todo => {
                return (
                    <div key={todo.id} className='content'>
                        {todos.selectedTodoId === todo.id && isedit ? (
                            <form onSubmit={handleEditSubmit}>
                                <input type='text' value={editingName} onChange={(e) => setEditingName(e.target.value)} />
                                <button>Save</button>
                            </form>
                        ) : (
                            <div style={{ color: todo.complete ? '#AAA' : '#000' }}>
                                {todo.name}
                            </div>
                        )}

                        <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}>Toggle</button>
                        <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>Delete</button>
                        <button onClick={() => handleSelect(todo)}>Edit</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Reform

// import React, { useReducer, useState } from 'react'
// import Todo from './Todo'

// function reducer(todos, action) {
//     switch (action.type) {
//         case "add-todo":
//             return {
//                 todos: [...todos, action.payload.name]
//             }
//         default:
//             return todos
//     }
// }

// function Reform() {

//     const [todos, dispatch] = useReducer(reducer, [])
//     const [name, setName] = useState("")
//     const [isEdit, setEdit] = useState(false)

//     function Handlesubmit(e) {
//         e.preventDefault();
//         setName("")
//         dispatch({ type: "add-todo", payload: { name: name } })
//     }

//     return (
//         <div className='content'>
//             <form onSubmit={Handlesubmit}>
//                 <label>Task: </label>
//                 <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
//             </form>
//             {todos.map(todo => {
//                 return <Todo key={todo.id} todo={todo} dispatch={dispatch}  />
//             })}
//         </div>
//     )
// }

// export default Reform