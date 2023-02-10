import React, { useState } from 'react'

function SignUP() {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [add, setAdd] = useState("");
    const [mob, setMob] = useState("");
    const [box, setBox] = useState(false);

    const [errorFirst, setErrorfirst] = useState(false);
    const [errorLast, setErrorlast] = useState(false);
    const [errorEmail, setErroremail] = useState(false);
    const [errorAdd, setErroradd] = useState(false);
    const [errorMob, setErrormob] = useState(false);

    const [isEdit, setEdit] = useState(false);
    const [isvalidform, setValidform] = useState(false)
    const [Objectdata, setObjectdata] = useState({})
    

    const regx = (email) => {
        const mail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
        return mail
    }

    const OnEdit = (e) => {
        
        setEdit(true)
        setValidform(false)
    }

    const ValidCondition = () => {
        if (first.length === 0 || first.length < 3 || first.length > 10) {
            setErrorfirst(true)
        } else if (last.length === 0 || last.length < 3 || last.length > 10) {
            setErrorlast(true)
        } else if (email.length === 0) {
            setErroremail(true)
        } else if (add.length === 0) {
            setErroradd(true)
        } else if (mob.length === 0 && mob.length !== 10) {
            setErrormob(true)
        }
        else {
            setErrorfirst(false);
            setErrorlast(false);
            setErroremail(false);
            setErroradd(false);
            setErrormob(false);
        }
    }

    const SubmitForm = (e) => {
        e.preventDefault();
        const ABCobject =
        {
            fname: first,
            lname: last,
            mail: email,
            gen: gender,
            addr: add,
            mnum: mob,
            chek: box
        }
        const editData = {...ABCobject, first:first, last:last, email:email, gender:gender, add:add, mob:mob, box:box}

        if (first.length === 0 || last.length === 0 || email.length === 0 || add.length === 0 || mob.length === 0 || mob.length !== 10 || add.length <= 10 || !regx(email)) {
            setErrorfirst(true);
            setErrorlast(true);
            setErroremail(true);
            setErroradd(true);
            setErrormob(true);
            setValidform(false)
        }
        else {
            setFirst("");
            setLast("");
            setEmail("");
            setGender("");
            setAdd("");
            setMob("");
            setValidform(true)
            setBox(false);
            alert("Registered!");
            if(isEdit){
                setObjectdata(editData)
            }else {
                setObjectdata(ABCobject)
            }
            setObjectdata(ABCobject)
            console.log(editData)
            // console.log(formData)
        }

    }

    return (
        <div className="content">
            <h2>SignUP Form</h2>

            {isvalidform ?

                <div className='content'>

                    {isEdit ? <b> Edited!</b> : <b>Submitted!</b>}
                    <p>First name :{Objectdata.fname}  </p>
                    <p>Last Name : {Objectdata[1]} </p>
                    <p>Email ID : {Objectdata[2]}</p>
                    <p>Gender: {Objectdata[3]}</p>
                    <p>Address: {Objectdata[4]}</p>
                    <p>Mobile Number: {Objectdata[5]}</p>

                    {isEdit ? "" : <button onClick={(e) => OnEdit(e)}>Edit</button>}

                </div> :

                <form onSubmit={SubmitForm}>
                    <label>First Name : </label>

                    <input
                        type='text'
                        name='fname'
                        value={Objectdata.first}
                        onChange={(e) => {
                            console.log(e.target.value)
                            setFirst(e.target.value)
                        }}
                        maxLength={15}
                        minLength={3}
                        placeholder='First Name'
                        onBlur={ValidCondition}
                    />
                    {
                        errorFirst && first.length <= 0 ? <label id='error'>First Name Can't be empty!</label> :
                            errorFirst && first.length < 3 ? <label id='error'>Name should contain 3-10 letters!</label> :
                                errorFirst && first.length > 10 ? <label id='error'>Name should contain 3-10 letters!</label> : ""
                    }

                    <label>Last Name : </label>
                    <input
                        type='text'
                        value={last}
                        onChange={(e) => setLast(e.target.value)}
                        maxLength={15}
                        minLength={3}
                        onBlur={ValidCondition}
                        placeholder='Last Name'
                    />
                    {
                        errorLast && last.length <= 0 ? <label id='error'>Last Name Can't be empty!</label> :
                            errorLast && last.length < 3 ? <label id='error'>Last Name should contain 3-10 letters!</label> :
                                errorLast && last.length > 10 ? <label id='error'>Last Name should contain 3-10 letters!</label> : ""
                    }

                    <label>Email : </label>
                    <input
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={ValidCondition}
                        placeholder='xyz@gmail.com'
                    />
                    {
                        errorEmail && email.length <= 0 ? <label id='error'>Email Can't be empty!</label> :
                            errorEmail && !regx(email) ? <label id='error'>Invalid Email!</label> : ""
                    }

                    <label htmlFor='Gender'>Gender : </label>
                    <div className='gender'>
                        <div>
                            <input
                                type='radio'
                                name="Gender"
                                id="male"
                                value={gender}
                                onChange={() => setGender("male")}
                                required
                            />
                            <label htmlFor='male'>Male</label>
                        </div>
                        <div>
                            <input
                                type='radio'
                                name="Gender"
                                id="female"
                                onChange={() => setGender("female")}
                                value={gender}
                                required
                            />
                            <label htmlFor='male'>Female</label>
                        </div>
                        <div>
                            <input
                                type='radio'
                                name="Gender"
                                id="other"
                                value={gender}
                                onChange={() => setGender("other")}
                                required
                            />
                            <label htmlFor='male'>Other</label>
                        </div>
                    </div>

                    <label>Address : </label>
                    <textarea
                        value={add}
                        onChange={(e) => setAdd(e.target.value)}
                        placeholder='Write your Address'
                        onBlur={ValidCondition}
                    />
                    {
                        errorAdd && add.length <= 0 ? <label id='error'>Address Can't be empty!</label> :
                            errorAdd && add.length <= 10 ? <label id='error'>Input for field is not sufficient enough!</label> : ""
                    }

                    <label>Mobile Number : </label>
                    <input
                        type='number'
                        value={mob}
                        maxLength={10}
                        onChange={(e) => setMob(e.target.value)}
                        onBlur={ValidCondition}
                        placeholder='+91 '
                    />
                    {
                        errorMob && mob.length <= 0 ? <label id='error'>Mobile Number Can't be empty!</label> :
                            errorMob && mob.length !== 10 ? <label id='error'>Invalid Mobile Number!</label> : ""
                    }

                    <div className="checkbox">
                        <div>
                            <input
                                type='checkbox'
                                name="Yes"
                                id="Yes"
                                value={box}
                                onChange={(e) => setBox(true)}
                                required
                            />
                        </div>
                    </div>
                    <label htmlFor='subscription'>Aggreed with the T&C ? </label>

                    <div className="btn">
                        {isEdit ? <button>Edit</button> : <button>Submit</button>}
                    </div>


                </form>
            }

        </div>
    )
}

export default SignUP