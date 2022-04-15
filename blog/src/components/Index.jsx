import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { useNavigate } from "react-router-dom"
import { postsList, deletePost } from "../services/getRequests"

export default function Index(){
    const nav = useNavigate()
    const [data, setData] = useState([])

    useEffect(()=>{
        postsList()
        .then(res=> setData(res.data))
    }, [])
    console.log(data)    
    
    return(
        <div>
            <h1> Welcome to the Bloggggg </h1>
            <button onClick={()=> {nav('/new')}}> Create a New Post </button>
            <ul>
                {data.map((item, i)=>{
                    return(
                    <li key={i} id='posts'>
                        <a href= {`/${item._id}`} > {item.title} </a> <br/> <br/>
                        <img src={`${item.image}`} height='300px' ></img>
                    </li>
                )})}
            </ul>
            
        </div>
    )
}