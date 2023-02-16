import React, { useState } from 'react'
import TodoItem from './TodoItem'

const DummyData = [
    {
        id: 1,
        title: "ABC",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odio nesciunt voluptate est ipsam voluptatibus provident tempora, eveniet sequi recusandae, eaque excepturi quibusdam blanditiis ea! Facere totam corporis omnis laudantium."
    },
    {
        id: 2,
        title: "XYZ",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odio nesciunt voluptate est ipsam voluptatibus provident tempora, eveniet sequi recusandae, eaque excepturi quibusdam blanditiis ea! Facere totam corporis omnis laudantium."
    },
    {
        id: 3,
        title: "PQR",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odio nesciunt voluptate est ipsam voluptatibus provident tempora, eveniet sequi recusandae, eaque excepturi quibusdam blanditiis ea! Facere totam corporis omnis laudantium."
    }
]

function Home() {

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [xyzdata, setdata] = useState(DummyData)
    const [isEdit, setEdit] = useState(false)
    const [editid, setEditid] = useState(null)
    const [error, setError] = useState(false)

    // For Delete the Todo
    const onDelete = (id) => {
        const NewArraydata = xyzdata.filter((item) => {
            // console.log(item.id,28)
            return item.id !== id
        })
        // console.log(NewArraydata)
        setdata(NewArraydata)
    }

    // For Edit Todo
    const onEdit = (id) => {
        let editItem = xyzdata.find(data => {
            return data.id === id
        })
        // console.log(editItem)
        setEdit(true)
        setTitle(editItem.title)
        setDesc(editItem.desc)
        setEditid(id)
    }

    // For Submit the form with adding Todo
    const Submit = (e) => {
        e.preventDefault();
        if (title.length === 0 || desc.length === 0) {
            setError(true)
        } else {
            addTodo(title, desc)
        }
    }

    // For add Todo
    const addTodo = (title, desc) => {
        if (title && desc && isEdit) {
            setdata(
                xyzdata.map((elem) => {
                    if (elem.id === editid) {
                        return { ...elem, title: title, desc: desc }
                    }
                    return elem
                })
            )
            setTitle("")
            setDesc("")
            alert("Edited!")
            setEdit(false)
        } else {
            let id = xyzdata[xyzdata.length - 1].id + 1;
            const NewArray =
            {
                id: id,
                title: title,
                desc: desc,
            }
            alert("Added!")
            setError(false)
            //  const pushArray = xyzdata.push(...xydata,NewArray)
            setdata([...xyzdata, (NewArray)]);
            // console.log(xyzdata, 62);  
            setTitle("")
            setDesc("")
        }
    }

    return (
        <div className="content">
            <h2>Create</h2>
            <form onSubmit={Submit}>
                <label>Title</label>
                <input
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                {
                    error && title.length === 0 ? <label id='error'>Title Can't be blank!</label> : ""
                }
                <label>Description</label>
                <textarea
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
                {
                    error && desc.length === 0 ? <label id='error'>Description Can't be blank!</label> : ""
                }
                {
                    isEdit ? <button>Edit</button> : <button>Add</button>
                }
            </form>
            <br />
            <h2>ToDos</h2>
            {
                xyzdata.length === 0 ? "No ToDos to Display" :
                    xyzdata.map(data => {
                        return <TodoItem key={data.id} data={data} onEdit={onEdit} onDelete={onDelete} />
                    })
            }
            
        </div>
    )
}

export default Home