import { useParams } from "react-router-dom";
import { useContext,useState, useEffect } from 'react';
import { AppContext } from '../App';
import'./Home.css';

export const OnePost = () => {
    const {posts,setPosts}=useContext(AppContext);
    const [id,setId]=useState("");
    const params=useParams();

    useEffect(()=>{
        setId(params.id);
    },[])
    
    return (
        <div>
            {posts.map((post)=>{
                if(post.id===id){
                    return(
                        <div className="card1">
                        <div className="header">
                            <h1>{post.title}</h1>
                        </div> 
                        <div className="image-div">
                        <img src={post.image_url} alt={post.title}/>
                        </div>
                        <div className="second-part second-part2">
                            <p className="title">Author: {post.author_name}</p>
                            <p className="desc">{post.content}
                            </p>
                        </div>
                    </div>
                    ) 
                }
            })}
        </div>
    )
}