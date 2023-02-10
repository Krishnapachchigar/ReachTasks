import React, { useState } from 'react'

function Form() {

    const [isEdit, setEdit] = useState(false)
    const [isvalidform, setValidform] = useState(false)
    const [error, setError] = useState(false)
    const [formData, setFormdata] = useState(
        {
            fname: "",
            lname: "",
            mail: "",
            gen: "",
            addr: "",
            mnum: "",
            chek: true
        });

    const regx = () => {
        const mail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.mail);
        return mail
    }

    const ChangeHandler = (e) => {
        setFormdata({
            ...formData, [e.target.name]: e.target.value
        })
    }

    const ValidCondition = () => {
        if (formData.fname.length === 0 || formData.fname.length <=3 || formData.lname.length === 0 || formData.lname.length <=3 || formData.addr.length === 0 || formData.addr.length >10 || formData.mnum.length === 0 || formData.mnum.length !== 10 || formData.addr.length <= 10) {
            setError(true)
            setValidform(false)
        } else
        {
            setError(false)
            setValidform(true)
        }
    }

    const OnEdit = (e) => {
        e.preventDefault();
        setEdit(true)
        setValidform(false)
        console.log("hello!")
    }

    const SubmitForm = (e) => {
        e.preventDefault();
        setValidform(true)
        console.log(formData)
    }

    return (
        <div className="content">
            <h2>SignUP Form</h2>
            {isvalidform ?
                <div>
                    {isEdit ? <b> Edited!</b> : <b>Submitted!</b>}
                    <p>First Name: {formData.fname}</p>
                    <p>Last Name: {formData.lname}</p>
                    <p>Email ID: {formData.mail}</p>
                    <p>Address: {formData.addr}</p>
                    <p>Mobile number: {formData.mnum}</p>
                    {isEdit ? <b>Thanks for Registering!</b> : <button onClick={(e) => OnEdit(e)}>Edit</button>}
                </div>

                :

                <form onSubmit={SubmitForm}>
                    <label>First Name : </label>
                    <input
                        type='text'
                        value={formData.fname}
                        onChange={ChangeHandler}
                        name="fname"
                        minLength={3}
                        placeholder='First Name'
                        onBlur={ValidCondition}
                    />
                    {
                        error && formData.fname.length === 0 ? <label id='error'>Empty Input!</label> :
                            error && formData.fname.length <= 3 ? <label id="error">First name must contain 3-10 letters!</label> : ""
                    }

                    <label>Last Name : </label>
                    <input
                        type='text'
                        value={formData.lname}
                        name="lname"
                        onChange={ChangeHandler}
                        maxLength={15}
                        minLength={3}
                        placeholder='Last Name'
                        onBlur={ValidCondition}
                    />
                    {
                        error && formData.lname.length === 0 ? <label id='error'>Empty Input!</label> :
                            error && formData.lname.length <= 3 ? <label id="error">Last name must contain 3-10 letters!</label> : ""
                    }

                    <label>Email : </label>
                    <input
                        type='email'
                        onChange={ChangeHandler}
                        value={formData.mail}
                        name="mail"
                        placeholder='xyz@gmail.com'
                        onBlur={ValidCondition}
                    />
                    
                    <label htmlFor='Gender'>Gender : </label>
                    <div className='gender'>
                        <div>
                            <input
                                type='radio'
                                name="gen"
                                id="female"
                                onChange={ChangeHandler}
                                value={formData.gen}
                                onBlur={ValidCondition}
                                required
                            />
                            <label htmlFor='male'>Male</label>
                        </div>
                        <div>
                            <input
                                type='radio'
                                name="gen"
                                id="female"
                                onChange={ChangeHandler}
                                value={formData.gen}
                                onBlur={ValidCondition}
                                required
                            />
                            <label htmlFor='female'>Female</label>
                        </div>
                        <div>
                            <input
                                type='radio'
                                name="gen"
                                id="female"
                                onChange={ChangeHandler}
                                value={formData.gen}
                                onBlur={ValidCondition}
                                required
                            />
                            <label htmlFor='other'>Other</label>
                        </div>
                    </div>

                    <label>Address : </label>
                    <textarea
                        onChange={ChangeHandler}
                        name="addr"
                        value={formData.addr}
                        placeholder='Write your Address'
                        onBlur={ValidCondition}
                    />
                    {
                        error && formData.addr.length === 0 ? <label id='error'>Empty Input!</label> : 
                            error && formData.addr.length < 10 ? <label id='error'>Not Sufficinet input!</label> : ""
                    }

                    <label>Mobile Number : </label>
                    <input
                        type='number'
                        onChange={ChangeHandler}
                        name="mnum"
                        value={formData.mnum}
                        maxLength={10}
                        placeholder='+91 '
                        onBlur={ValidCondition}
                    />
                    {
                        error && formData.mnum.length === 0 ? <label id='error'>Invalid Input!</label> : 
                            error && formData.mnum.length !== 10 ? <label id='error'>Field Must Contain 10 numbers!</label> : ""
                    }

                    <div className="checkbox">
                        <div>
                            <input
                                type='checkbox'
                                name="check"
                                id="Yes"
                                onChange={ChangeHandler}
                                value={formData.chek}
                                checked={formData.chek === true}
                                required
                            />
                        </div>
                    </div>
                    <label htmlFor='subscription'>Aggreed with the T&C ? </label>

                    <div className="btn">
                        <button>Submit</button>
                    </div>
                </form>
            }
        </div>
    )
}

export default Form