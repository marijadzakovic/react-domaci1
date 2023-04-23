import'./Home.css';
import {Link} from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { AppContext } from '../App';
export const Home=()=>{
  
    const {posts,setPosts}=useContext(AppContext);

    const fetchData= async ()=> {
        const response=await fetch("https://jsonblob.com/api/1097511134277419008");
        if (!response.ok) {
            throw new Error('Data could not be fetched!')
        } else {
            return response.json()
        }
        
    }
    useEffect(() => {
        fetchData()
          .then((data) => {setPosts(data)})
          .catch((e) => {
            console.log(e.message);
          })
      }, [])


    return (
        <div>
            <header>
               <Link to="/"><img src={require('./blog.png')} alt="logo"></img></Link> 
               <Link to="/add-post"><button>Dodaj post </button></Link>
            </header>
               <div className="container">
               {posts.map((post, idx)=> {
                return ( 
                    <Link key={post.id} to={`/single-post/${post.id}`}>
                    <div className="card">
                        <img src={post.image_url} />
                        <div className="second-part">
                            <p className="title">{post.title}</p>
                            <p className="desc">{post.author_name}</p>
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