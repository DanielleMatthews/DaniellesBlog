import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updatePost, deletePost, onePost } from "../services/getRequests";

export default function Show(){
    const nav = useNavigate()
    const { id } = useParams()
    const [data, setData] = useState({})
    const [comments, setComments] = useState([])

    useEffect(()=>{
        onePost(id)
        .then(res=> {
            setData(res.data)
            setComments(res.data.comments)
        })
    }, [])

    const addComment = e => {
        e.preventDefault()
        comments.push({ 
            name: e.target.name.value, 
            message: e.target.message.value})
        const post = {
            title: data.title,
            body: data.body,
            author: data.author,
            date: data.date,
            image: data.image,
            comments: comments }
        updatePost(id, post)
        e.target.name.value = null
        e.target.message.value = null
    }
    const deleteThePost = () => {
        deletePost(id)
        nav('/')
    }
   
    return(
        <div id='post'>
            <h1> {data.title} </h1>
            <h3> {data.author}  {data.date} </h3>
            <img src={`${data.image}`} height='300' width='200' />
            <p> {data.body} </p> <br/>
            <button onClick={()=> {nav(`/${id}/update`)}}> Edit Post </button> <br/>
            <button onClick={deleteThePost}> Delete Post </button>
            <h1> Comments </h1>
            <ul id='showul'>
                {comments.map((comment, i)=>(
                    <div className='comments'>
                    <li key={i} id='showli'>
                        <h3> User: {comment.name} </h3>
                        <p> {comment.message} </p>
                    </li>               
                    </div>
                ))}
            </ul>
            <div id='commentsForm'>
                <h3> New Comment </h3>
                <form onSubmit={addComment}>
                    Name: <input type='text' name='name' /> <br/>
                    Message: <input type='text' name='message'/><br/>
                    <input type='submit' value='Add Comment' />
                </form>
            </div>
        </div>
    )
}

// This is Buster, he is a one year old kitten who is absolutely insane. He loves to sit on his cat tree and watch the bird feeder, or sit in his window seat and watch for birds in the backyard. He will stop everything he is doing and bolt upstairs if he hears me walking upstairs (he gets fed upstairs). I have taught him how to sit for his food. His favorite toys are balls with bells, his tunnel, and a fishing pole(no, not an actual fishing pole) that he will drag around this house. Sometimes he will even play with it by himself. He will grab the handle end and watch the string on the other side. While Buster does have favorite toys, he will play with just about anything. Literally. Buster also enjoys watching my bearded dragon, which is fine, but here recently he has been jumping on the tank and busting through the screen on the top. He will fall through the screen and that's enough to scare him into jumping back out, most of the time. He is a japanese bobtail cat mixed with something else. I want to get a dna test done on him because I am curious to know 1. why is he so big 2. where his high cheekbones come form 3. where his nose comes from, if you look at him from the side his nose has a little hump to it. He isn't always crazy, like all the times that he is sleeping. He loves to sleep, he will stretch out big and lay on his back, or he will curl up in a tiny ball. He also likes to knead and suck on blankets, but I have noticed he will only do it with a specific type of blanket. He also likes to watch what you're doing on your phone, sometimes pawing at the screen if he's really interested. He will even play games on my moms iPad. His nails grow super fast and if I dont keep them trimmed he will slice you open in a heartbeat. Although he does like to reak havoc he is still a very funny cat and I love him dearly.