import axios from "axios";

const baseUrl = "https://6538c6baa543859d1bb1e611.mockapi.io"


export const getAllTodos = async () => {
    const resp = await axios.get(`${baseUrl}/todos`)
    return resp.data;
}

export const createTodo = async (payload) => {
    const resp = await axios.post(`${baseUrl}/todos`, payload)
    return resp.data;
}

export const updateTodo = async (payload) => {
    const resp = await axios.put(`${baseUrl}/todos/${payload.id}`, payload)
    return resp.data;
}

export const deleteTodo = async (id) => {
    const resp = await axios.delete(`${baseUrl}/todos/${id}`)
    return resp.data;
}