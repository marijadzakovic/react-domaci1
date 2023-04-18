//import {Link} from 'react-router-dom';
import {useState} from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';
import './Home.css';


export const AddPost=()=>{
    const {posts,setPosts}=useContext(AppContext);
    const [title,setTitle]=useState("");
    const [authorName,setAuthorName]=useState("");
    const [url,setUrl]=useState("");
    const [content,setContent]=useState("");
   

    function postBlob(){ 
        fetch('https://jsonblob.com/api/jsonBlob', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'redirect': 'follow'
        },
        body: JSON.stringify({id:"2",title:title,author_name:authorName, image_url:url, content:content})
        })
        .then(function(response) {
        let blobUrl=  response.headers.get('Location'); /* ovdje se nalazi url gdje ti je sacuvan tvoj json */
       
        })
        .catch(function(error){
            console.log(error);
        });
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
          
  
          body: JSON.stringify({id:"2",title:title,author_name:authorName, image_url:url, content:content})

      })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error))
  }
  // putBlob();
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
            <button className="ui button" type="submit" onClick={(event)=>{event.preventDefault();
                        postBlob(); 
                       }}>Submit</button>
          </form>
        </div>
    )
}