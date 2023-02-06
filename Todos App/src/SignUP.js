import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SignUP() {

    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [add, setAdd] = useState("");
    const [mob, setMob] = useState("");
    const [errorFirst, setErrorfirst] = useState(false);
    const [errorLast, setErrorlast] = useState(false);
    const [errorEmail, setErroremail] = useState(false);
    const [errorAdd, setErroradd] = useState(false);
    const [errorMob, setErrormob] = useState(false);
    const navigate = useNavigate();

    const regx = (email) => {
        const mail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
        return mail
    }

    const Input = () => {
        if(first.length === 0 || first.length<3 || first.length>10 ){
            setErrorfirst(true)
        }else if(last.length === 0 || last.length<3 || last.length>10 ){
            setErrorlast(true)
        }else if(email.length === 0){
            setErroremail(true)
        }else if (add.length === 0){
            setErroradd(true)
        }else if(mob.length === 0){
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

    const Submit = (e) => {
        e.preventDefault();
        if (first.length === 0 || last.length === 0 || email.length === 0 || add.length === 0 || mob.length === 0 || mob.length !== 10 || add.length <= 10 || !regx(email)) {
            setErrorfirst(true);
            setErrorlast(true);
            setErroremail(true);
            setErroradd(true);
            setErrormob(true);
        }
        else {
            // console.log("Submitted!");
            alert("Registered!")
            navigate('/');
        }
    }

    const Cancleform = () => {
        alert("Are you sure to go back?")
        setFirst("")
        setLast("")
        setEmail("")
        setAdd("")
        setMob("")
        navigate("/")
    }

    return (
        <div className="content">
            <h2>SignUP Form</h2>
            <form onSubmit={Submit}>
                <label>First Name : </label>
                <input
                    type='text'
                    value={first}
                    onChange={(e) => setFirst(e.target.value) }
                    maxLength={15}
                    minLength={3}
                    placeholder='First Name'
                    onBlur={Input}
                    autoFocus
                />
                {
                    errorFirst && first.length <= 0 ? <label id='error'>First Name Can't be empty!</label> :
                        errorFirst && first.length <3 ? <label id='error'>Name should contain 3-10 letters!</label> : 
                            errorFirst && first.length >10 ? <label id='error'>Name should contain 3-10 letters!</label> : ""
                }

                <label>Last Name : </label>
                <input
                    type='text'
                    value={last}
                    onChange={(e) => setLast(e.target.value)}
                    maxLength={15}
                    minLength={3}
                    onBlur={Input}
                    placeholder='Last Name'
                />
                {
                    errorLast && last.length <= 0 ? <label id='error'>Last Name Can't be empty!</label> :
                    errorLast && last.length <3 ? <label id='error'>Last Name should contain 3-10 letters!</label> : 
                        errorLast && last.length >10 ? <label id='error'>Last Name should contain 3-10 letters!</label> : ""
                }

                <label>Email : </label>
                <input
                    type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={Input}
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
                            value='male'
                            required
                        />
                        <label htmlFor='male'>Male</label>
                    </div>
                    <div>
                        <input
                            type='radio'
                            name="Gender"
                            id="female"
                            value='female'
                            required
                        />
                        <label htmlFor='male'>Female</label>
                    </div>
                    <div>
                        <input
                            type='radio'
                            name="Gender"
                            id="other"
                            value='other'
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
                    onBlur={Input}
                />
                {
                    errorAdd && add.length <= 0 ? <label id='error'>Address Can't be empty!</label> :
                        errorAdd && add.length <= 10 ? <label id='error'>Input for field is not sufficient enough!</label> : ""
                }

                <label>Mobile Number : </label>
                <input
                    type='number'
                    value={mob}
                    onChange={(e) => setMob(e.target.value)}
                    onBlur={Input}
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
                            value='Yes'
                            required
                        />
                    </div>
                </div>
                <label htmlFor='subscription'>Aggreed with the T&C  </label>

                <div className="btn">
                    <button>Submit</button>
                    <button onClick={() => Cancleform()}>Cancle</button>
                </div>
            </form>
        </div>
    )
}

export default SignUP