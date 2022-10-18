import Nav from './component/Navigation/Nav';
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './component/Home/Home';
import Contact from './component/Contact/Contact';
import About from './component/About/About';
import Footer from './Footer/Footer';
import Blog from './component/Blog/Blog';
// import cv from './img/cv.pdf';
// import Delete from './Admin/Delete';
// import Admin from './Admin/OnlyAdminCanEnter';
import LogIn from './component/LogIn/LogIn';


function App() {
  return (
    <div style={{scrollBehaviour:'smooth'}}>
      {/* <marquee behavior="scroll" direction="left"><h3 style={{color:'red'}}>Hello this is my portfolio with react</h3></marquee> */}
     <Nav/> 

     {/* <Home/>     
     <About/>
     <Contact/> */}

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        {/* <Route path='/admin' element={<Admin/>} /> */}
        
        {/* <Route path='/resume' element={<a href={cv} target='_blank'   rel="noopener" className='contact-me-home call-me'>Resume</a>} /> */}
        
        <Route path='/blog' element={<Blog/>} />
        <Route path='/logIn' element={<LogIn/>} />

        {/* <li class="nav-item"><a href="image/resume.pdf">Resume</a></li> */}
        
        {/* 404 Page not found */}
        <Route path='/*' element={<h1 className='pnf' style={{  paddingTop: '5%',
        paddingLeft: '10%',
        fontWeight: 'bold',
        fontVariant: 'small-caps',
        color: '#000',
        textShadow: '2px 2px 5px yellow'}}>404! Page Not Found.. <br /> Go to home page <NavLink className="nav-list" to='/'>Click Here</NavLink></h1>} />
        {/* 404 end */}

        
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
