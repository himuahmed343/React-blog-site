import { signOut } from '@firebase/auth';
import { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';
import Login from './pages/Login';
import { auth } from './firebase-config';



function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))


  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()

      setIsAuth(false)
      window.location.pathname= '/login'
    })
  }
  return (
    
    <Router>
      <nav>
        <Link to="/">Home</Link>
        {!isAuth ? (<Link to="/login">Login</Link>) : (
        <>
        <Link to="/create">Create Post</Link>
        <button className="login-with-google-btn" style={{backgroundColor: '#ff8800', color: "#000", padding:"8px 28px"}} onClick={signUserOut}>Log Out</button>
                
              </>)
                
}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/create" element={<CreatePost isAuth={isAuth} />} />

      </Routes>
    </Router>
  );
}

export default App;
