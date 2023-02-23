import React from 'react'
import { useForm } from 'react-hook-form'

function FormHook() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitSuccessful },
    } = useForm({
        mode:"onBlur"        
    });

    const onsubmit = (data) => {
        console.log(data)
    }

    const formData = {
        fname: watch("fname"),
        email: watch("email"),
        phnum: watch("phnum"),
        password : watch("password"),
        conpass : watch("conpass"),
        state : watch("state"),
        gen : watch("gen"),
        check : watch("check")
    }
   

    return (
        <div className='content'>
            <h2>Form Hook</h2>

            {isSubmitSuccessful ?
                <>
                    <h3>Thanks for Registering!</h3>
                    <p>Full Name : {formData.fname}</p>
                    <p>Email Address : {formData.email}</p>
                    <p>Phone Number : {formData.phnum}</p>
                    <p>Password: {formData.password}</p>
                    <p>State: {formData.state}</p>
                    <p>Gender: {formData.gen}</p>
                    <p>Aggreed ? : {formData.check}</p>
                </>
                :
                <form onSubmit={handleSubmit(onsubmit)}>

                    <label>Full Name : </label>
                    <input
                        type='text'
                        name='fname'
                        {...register("fname",
                            {
                                required: "Full Name is required!",
                                minLength: {
                                    value: 3,
                                    message: "Full Name should be at-least 3 charecters!"
                                }
                            }
                        )}
                    />
                    {
                        errors.fname && <label id='error'>{errors.fname.message}</label>
                    }

                    <label>E-Mail Address :</label>
                    <input
                        type='text'
                        name='email'
                        {...register("email",
                            {
                                required: "Email is required!",
                                pattern: {
                                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                    message: "Invalid Email!"
                                }
                            })
                        }
                    />
                    {
                        errors.email && <label id='error'>{errors.email.message}</label>
                    }

                    <label>Phone Number : </label>
                    <input
                        type='text'
                        name='phnum'
                        {...register("phnum",
                            {
                                required: "Phone Number is required!",
                                minLength: {
                                    value: 10,
                                    message: "Phone number must contain 10 digits!"
                                },
                                pattern: {
                                    value: /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/,
                                    message: "Invalid Monbile number"
                                }
                            }
                        )}
                    />
                    {
                        errors.phnum && <label id='error'>{errors.phnum.message}</label>
                    }

                    <label>Password : </label>
                    <input
                        type='password'
                        name='password'
                        {...register("password",
                            {
                                required: "Password is required!",
                                minLength: {
                                    value: 6,
                                    message: "Password should be at-least 6 charecters!"
                                }
                            })
                        }
                    />
                    {
                        errors.password && <label id='error'>{errors.password.message}</label>
                    }

                    <label>Confirm Password : </label>
                    <input
                        type='password'
                        name='conpass'
                        {...register("conpass",
                            {
                                required: true,
                                validate: value => value === formData.password
                            }
                        )}
                    />
                    {
                        errors.conpass && errors.conpass.type === 'required' && (<p id='error'>Password must need to match!</p>)
                    }
                    {
                        errors.conpass && errors.conpass.type === 'validate' && (<p id='error'>Unmatched Password!</p>)
                    }

                    <label>Choose your state : </label>
                    <select type='select' name='state' {...register("state",{ required: true})}>
                        <option value=''> Select State</option>
                        <option value='Surat'>Surat</option>
                        <option value='Vadodara'>Vadodara</option>
                    </select>
                    {
                        errors.state && errors.state.type === 'required' && (<p id='error'>Empty Field!</p>)
                    }

                    <label>Choose your Gender : </label>
                    <div className='gender'>
                        <div>
                            <input
                                type='radio'
                                name="gen"
                                {...register("gen", { required: true})}
                            />
                            <label htmlFor='male'>Male</label>
                        </div>
                        <div>
                            <input
                                type='radio'
                                name="gen"
                                {...register("gen", { required: true})}
                            />
                            <label htmlFor='female'>Female</label>
                        </div>
                        <div>
                            <input
                                type='radio'
                                name="gen"
                                {...register("gen", { required: true})}
                            />
                            <label htmlFor='other'>Other</label>
                        </div>
                    </div>
                    {
                        errors.gen && errors.gen.type === 'required' && (<p id='error'>Empty Field!</p>)
                    }

                    <div className="checkbox">
                        <div>
                            <input
                                type='checkbox'
                                name="check"
                                {...register("check", { required: true})}
                            />
                        </div>
                    </div>
                    <label htmlFor='subscription'> I aggree all terms & conditions</label>
                    {
                        errors.check && errors.check.type === 'required' && (<p id='error'>Empty Field!</p>)
                    }

                    <button>Submit</button>
                </form>
            }
        </div>
    )
}

export default FormHook