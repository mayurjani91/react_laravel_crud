import axios from 'axios';

export default axios.create({
    baseURL:"http://localhost/react_laravel_practice/backend/api",
    headers:{
        "Content-Type":"application/json"
    }
})