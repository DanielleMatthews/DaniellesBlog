import axios from 'axios'

//ALL
export function postsList(){
    const response = axios.get('http://localhost:3001/posts')
    return response
}

//ONE
export function onePost(id){
    const response = axios.get(`http://localhost:3001/posts/${id}`)
    return response
}

//DELETE
export function deletePost(id){
    const response = axios.delete(`http://localhost:3001/posts/${id}`)
    return response 
}

//CREATE
export function createPost(add){
    const response = axios.post('http://localhost:3001/posts', add)
    return response
}

//UPDATE
export function updatePost(id, updatedPost){
    const response = axios.put(`http://localhost:3001/posts/${id}`, updatedPost)
    return response
}