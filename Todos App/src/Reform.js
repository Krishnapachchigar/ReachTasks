import React, { useState } from "react";

function Reform() {

    const [formData, setFormdata] = useState({
        fname: "",
        addr: "",

    })

    const HandleChange = (e) => {
        setFormdata({ ...formData, [e.target.name]: e.target.value })
    }

    const Submitform = (e) => {
        e.preventDefault();
        console.log(formData)
    }

    return (
        <div className="content">
            <form onSubmit={Submitform}>
                <label>Name : </label>
                <input
                    type='text'
                    name="fname"
                    onChange={HandleChange}
                />

                <label>Address :</label>
                <input
                    type='text'
                    name="address"
                />

                <button>Submit</button>

            </form>
        </div>
    )
}

export default Reform