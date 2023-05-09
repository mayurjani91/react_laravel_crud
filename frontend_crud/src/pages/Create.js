import React, { useState } from "react"
import {useNavigate } from 'react-router-dom';
import http from "../http";

export function Create() {
    const navigate  = useNavigate();
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;            
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const submitForm = () => {
        http.post('/users', inputs).then((res) => {
            navigate('/home');
        })
    }

    return (
        <div>
            <h4>New users</h4>
            <div className="row">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="name" className="form-control" name="name" aria-describedby="nameHelp" value={inputs.name || ""} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" aria-describedby="emailHelp" value={inputs.email || ""} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" id="exampleInputPassword1" value={inputs.password || ""} onChange={handleChange} />
                </div>
                <button type="button" className="form-control btn btn-info mt-2" onClick={submitForm}>Submit</button>
            </div>
        </div>
    )
}
