import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { postsList } from "../services/getRequests"

export default function Index(){
    const nav = useNavigate()
    const [data, setData] = useState([])

    useEffect(()=>{
        postsList()
        .then(res=> setData(res.data))
    }, [])
    console.log(data)
    
    return(
        <div id='app'>
            <h1> Welcome to the Bloggggg </h1>
            <button onClick={()=> {nav('/new')}}> Create a New Post </button>
            <ul>
                {data.map((item, i)=>{
                    return(
                    <li key={i}>
                        <a href= {`http://localhost:3000/${item._id}`} > {item.title} </a>
                    </li>
                )})}
            </ul>
            
        </div>
    )
}