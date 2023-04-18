import'./Home.css';
import {Link} from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';
export const Home=()=>{
  
    const {posts,setPosts}=useContext(AppContext);

    const fetchData= async ()=> {
        const response=await fetch("https://jsonblob.com/api/1097511134277419008");
        if (!response.ok) {
            throw new Error('Data coud not be fetched!')
        } else {
            return response.json()
        }
        
    }
    useEffect(() => {
        fetchData()
          .then((data) => setPosts(data))
          .catch((e) => {
            console.log(e.message)
          })
      }, [])
/*
    const generateLinks = () => {
        console.log(posts);
        if(posts.length!==0){
            console.log("Uslo se u ovaj dio");
        posts.map((post)=> {
           return ( 
            <Link key={post.id} to={`/single-post/${post.id}`}>
            <div className="card">
                <img src={post.image_url} />
                <div className="second-part">
                    <p className="title">{post.title}</p>
                    <p className="desc">{post.content}</p>
                </div>
            </div>
            </Link>
           );
    });
    }
    }
    */
    return (
        <div>
            <header>
               <Link to="/"><img src={require('./blog.png')} alt="logo"></img></Link> 
               <button><Link to="/add-post">Dodaj post </Link></button>
            </header>
               <div className="container">
               {posts.map((post, idx)=> {
                return ( 
                    <Link key={post.id} to={`/single-post/${post.id}`}>
                    <div className="card">
                        <img src={post.image_url} />
                        <div className="second-part">
                            <p className="title">{post.title}</p>
                            <p className="desc">{post.content}</p>
                        </div>
                    </div>
                    </Link>
                );
               })
               }
                
               </div>
        </div>
    )
}