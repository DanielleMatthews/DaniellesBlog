import { useNavigate } from "react-router-dom";
import { createPost } from '../services/getRequests'

export default function New(){
    const nav = useNavigate()

    const createThePost = e => {
        e.preventDefault()
        let add ={
            title: e.target.title.value,
            body: e.target.body.value,
            author: e.target.author.value,
            date: e.target.date.value,
            image: e.target.image.value 
            }
        createPost(add)
        nav ('/')
    }
    return(
        <div> 
            <h1> New Post </h1>
            <form onSubmit={createThePost} id='newForm'>
                Title: <input type='text' name='title' /> <br/>
                Author: <input type='text' name='author'/> <br/>
                Date: <input type='text' name='date'/> <br/>
                Image: <input type='text' name='image'/> <br/>
                Body: <br/> <textarea name='body' cols='40' rows='3' /> <br/>
                <input type='submit' value='Create New Post' /> 
            </form>
        </div>
    )
}