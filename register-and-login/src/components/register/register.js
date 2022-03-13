import React, {useState} from "react";
import "./register.css";
import axios from "axios";
import {useHistory} from "react-router-dom";

const Register = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reenter: ""
    })

    const handleChange = e => {
        // console.log(e.target);
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    const register = () => {
        const {name, email, password, reenter} = user;
        if(name && email && password && (password === reenter))
        {
            axios.post("http://localhost:9002/register", user)
            .then(res => {
                alert(res.data.message);
                hist.push("/login");
            });
        }
        else
            alert('Invalid Input');
        
    }

    const hist = useHistory();

    return(
        <div className="register">
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Enter your Name" onChange={handleChange}></input>
            <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange}></input>
            <input type="password" name="reenter" value={user.reenter} placeholder="Re-enter your Password" onChange={handleChange}></input>
            <div className="button" onClick={register}>Register</div>
            <div>Already a User?</div>
            <div className="button" onClick={() => hist.push("/login")}>Login Here</div>
        </div>
    )
}

export default Register;