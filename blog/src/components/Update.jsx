import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { onePost, updatePost } from "../services/getRequests"

export default function Update(){
    const { id } = useParams()
    const nav = useNavigate()
    const [data, setData] = useState({})

    useEffect(()=>{
        onePost(id)
        .then(res => setData(res.data))
    }, [])
    console.log(data)
    const updateThePost = e => {
        e.preventDefault()
        let updatedPost ={
            title: e.target.title.value,
            body: e.target.body.value,
            author: e.target.author.value,
            date: e.target.date.value,
            image: e.target.image.value,
            comments: data.comments}
        updatePost(id, updatedPost)
        console.log(updatedPost)
        nav(`/${id}`)
    }
    return(
        <div> 
            <h1> Update Post </h1>
            <form onSubmit={updateThePost} id='updateForm'>
                Title: <input type='text' name='title' defaultValue={data.title} /> <br/>
                Body: <input type='text' name='body' size='75' defaultValue={data.body}/> <br/>
                Author: <input type='text' name='author' defaultValue={data.author}/> <br/>
                Date: <input type='text' name='date' defaultValue={data.date}/> <br/>
                Image: <input type='text' name='image' defaultValue={data.image}/> <br/>
                <input type='submit' value='Update Post' id='updateBtn' /> 
            </form>
        </div>
    )
}