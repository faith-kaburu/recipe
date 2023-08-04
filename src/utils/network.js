import axios from 'axios';
import { getToken } from  './auth'

const instance = () => axios.create({
    baseURL: 'https://task-train-rails.onrender.com',
    timeout: 60000,
    headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getToken()
     }
});

const register = (data) => {
    return instance().post('/users', data);
}

const login = (data) => {
    return instance().post('/users/login', data);
}

const logout = () => {
    return instance().delete('/users/logout');
}

const addTask = (data) => {
    return instance().post('/todos', data);
}

const getTasks = () => {
    return instance().get('/todos');
}

const updateTask = (id, data) => {
    return instance().put(`/todos/${id}`, data);
}

const deleteTask = (id) => {
    return instance().delete(`/todos/${id}`);
}

export default { register, login, logout, addTask, getTasks, updateTask, deleteTask }
