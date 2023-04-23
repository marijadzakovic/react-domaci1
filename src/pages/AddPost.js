import {useState, useContext} from 'react';
import { AppContext } from '../App';
//import { useNavigate } from 'react-router-dom';
import './Home.css';


export const AddPost=()=>{
    const {posts, setPosts}=useContext(AppContext);
    const [title,setTitle]=useState("");
    const [authorName,setAuthorName]=useState("");
    const [url,setUrl]=useState("");
    const [content,setContent]=useState("");
 //   const navigate=useNavigate();
    
   
    const addNewPost=()=>{
  
        const newPost={
            "id": posts.length===0 ? 1 : posts[posts.length-1].id+1,
            "title":title,
            "image_url":url,
            "author_name":authorName,
            "content":content
        }

        console.log(newPost);
        setPosts([...posts, newPost]);
        console.log(posts);      
    }
  

     
    function putBlob(){ 

        let url = "https://jsonblob.com/api/1097511134277419008";
        fetch(url,{
    
            method: 'PUT',
    
            headers: {
    
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'https:://jsonblob.com',
                'Access-Control-Allow-Methods': 'POST, PUT, DELETE, HEAD, PATCH, OPTIONS' 
            },
            
    
            body: JSON.stringify(posts)

        })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error))
    }


    return (
        <div className="container1" >
        <form className="ui form">
            <div className="field">
              <label htmlFor='title'>Title</label>
              <input type="text" id="title" maxLength={20} onChange={(e)=>setTitle(e.target.value)} placeholder="Title"/>
            </div>
            <div className="field">
              <label htmlFor='authorName'>Author name</label>
              <input type="text" id="authorName" maxLength={20} onChange={(e)=>setAuthorName(e.target.value)} placeholder="Author"/>
            </div>
            <div className="field">
                <label htmlFor='url'>Image url</label>
                <input type="text" id='url' onChange={(e)=>setUrl(e.target.value)} placeholder="image url"/>
            </div>
            <div className="field">
                <label htmlFor='content'>Content</label>
                <textarea rows="3" id="content" onChange={(e)=>setContent(e.target.value)} placeholder="content"/>

            </div>
            <button className="ui button" type="submit" onClick={(event)=>{
                        event.preventDefault();
                        addNewPost();
                        putBlob(); 
                        //navigate('/');
                       }}>Submit</button>
          </form>
        </div>
    )
}