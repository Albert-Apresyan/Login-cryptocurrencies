import React, { useEffect, useState }  from "react";
import './Login.css';
import { Validation } from "./Validation";


const Login = ({submitForm}) => {
    
    const [values, setValues] = useState({
        email: "",
        password: ""
    })
    const [errors,SetErrors] = useState({})
    const [dataIsCorrect,setDataIsCorrect] = useState(false)

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }
    
    const handleFormSubmit = (event) => {
        event.preventDefault()
        SetErrors(Validation(values))
        setDataIsCorrect(true)
    }

    useEffect(()=>{
        if(Object.keys(errors).length === 0 && dataIsCorrect){
            submitForm(true)
        }
    }, [errors ])

    return(
        <div class="container">
	        <div class="screen">
		        <div class="screen__content">
                    <form className = 'login_form' >
                        <h2 className = 'login_text'>Login Here</h2>
                            <div className = 'email'>
                                <input 
                                    type = 'email' 
                                    name = 'email'
                                    className = 'emailInput'
                                    placeholder = 'Email'
                                    value = {values.email} 
                                    onChange ={handleChange}/>
                                    {errors.email && <p className = 'error'>{errors.email}</p>}
                                <br/>
                            </div>
                            <div className = 'password'>
                                <input 
                                    type = 'password' 
                                    name = 'password' 
                                    className = 'passwordInput'
                                    placeholder = 'Password'
                                    value = {values.password} 
                                    onChange = {handleChange}/>
                                    {errors.password && <p className = 'error'>{errors.password}</p>}
                                <br/>
                            </div>
                        <button type = 'submit' onClick = {handleFormSubmit} className = 'submit_btn'>Login</button>	
                    </form>
		        </div>	
            </div>
        </div>
    )
}

export default Login
