import axios from 'axios'

//ALL
export function postsList(){
    const response = axios.get('https://danielleblogapi.herokuapp.com/posts')
    return response
}

//ONE
export function onePost(id){
    const response = axios.get(`https://danielleblogapi.herokuapp.com/posts/${id}`)
    return response
}

//DELETE
export function deletePost(id){
    const response = axios.delete(`https://danielleblogapi.herokuapp.com/posts/${id}`)
    return response 
}

//CREATE
export function createPost(add){
    const response = axios.post('https://danielleblogapi.herokuapp.com/posts', add)
    return response
}

//UPDATE
export function updatePost(id, updatedPost){
    const response = axios.put(`https://danielleblogapi.herokuapp.com/posts/${id}`, updatedPost)
    return response
}