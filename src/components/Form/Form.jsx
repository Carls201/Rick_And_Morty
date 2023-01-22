import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import validation from "./validation";
import style from './Form.module.css'

import img from './logo.png'

const Form = ({login}) =>{
    
    const [userData, setUserData] = useState({username: '', password: ''});
    const [errors, setError] = useState({username: '', password: ''});

    const handleInputChange = (event) =>{
        setUserData({...userData, [event.target.name]: event.target.value})
        setError(validation({...errors, [event.target.name]: event.target.value}));
    }
    
    const handleSubmit = () =>{
        login(userData);
    }
    return (
        <div className = {style.loginbox}>
            <img src={img} alt="logo" className={style.avatar}/>
            <h1>Login Here</h1>

            <form>

                <label htmlFor="username" className={style.lblUser}>Username:</label>
                <input type="text" name='username' value={userData.username} onChange={handleInputChange} placeholder='Enter Username'/>
                {/* {errors.username && <p>{errors.username}</p>} */}

                <label htmlFor="password">Password:</label>
                <input type="password" name='password' value={userData.password} onChange={handleInputChange} placeholder='Enter Password'/>
                {/* {errors.password && <p>{errors.password}</p>} */}

                <button type="submit" onClick={handleSubmit}>LOGIN</button>
            </form>
        </div>
    );
}

export default Form;