import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import { AddPost } from './pages/AddPost';
import { OnePost } from './pages/OnePost';
import { useState, createContext } from 'react';

export const AppContext=createContext()
function App() {
  const [posts, setPosts]=useState([]);
  return (
    <div className="App">
      <AppContext.Provider value={{posts, setPosts}}>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/add-post" element={<AddPost/>}></Route>
          <Route path="single-post/:id" element={<OnePost/>}></Route>
        </Routes>
      </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
