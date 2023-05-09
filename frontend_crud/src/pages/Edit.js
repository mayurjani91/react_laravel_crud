import React, { useEffect, useState } from "react"
import {useNavigate, useParams } from 'react-router-dom';
import http from "../http";

export function Edit(props) {
    const navigate  = useNavigate();
    const [inputs, setInputs] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const  fetchUsers = ()=>{
        http.get('/users/'+id+'/edit').then((res)=>{
        setInputs({
            name:res.data.name,
            email:res.data.email,

        });
    });

    }

    const handleChange = (event) => {
        const name = event.target.name;            
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const submitForm = () => {
        http.put('/users/'+id,inputs).then((res) => {
            navigate('/home');
        })
    }

    return (
        <div>
            <h4>Edit users</h4>
            <div className="row">
                <div className="mb-3">
                    <label  className="form-label">Name</label>
                    <input type="name" className="form-control"  name="name" aria-describedby="nameHelp" value={inputs.name || ""} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Email address</label>
                    <input type="email" className="form-control"  name="email" aria-describedby="emailHelp" value={inputs.email || ""} onChange={handleChange} />
                </div>
                <button type="button" className="form-control btn btn-info mt-2" onClick={submitForm}>Submit</button>
            </div>
        </div>
    )
}
