
import './Nav.css'
import Button from './Button'
import React,{useState} from 'react'
import RightNav from './RightNav'

const Nav = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='Nav'>
           <header>
                <div className="navbar">
                    <div className="title">
                    <div className="name"><a href="./index.html">BOTSPOT AI</a></div>
                    </div>
                    <div className="navlinks">

                    <ul className='icon'>
                        <li><a href="index.html"><img src="./img/phone.svg" alt="" /></a></li>
                        <li><a href="index.html"><img src="./img/search.svg" alt="" /></a></li>
                         
                    </ul>  
                        
                        
                        <RightNav open={open}/>
                   <ul className='toggle' open={open} onClick={() => setOpen(!open)}>
                        <li><img src="./img/toggle.svg" alt="" /></li>
                    </ul>
                    </div>
                </div>
                <div className='header2'>
                        <div className='quote'>
                            <h1>THE SOUL OF THE WORLD</h1>
                            <h3>A SIMPLE SOLUTION</h3>
                        </div>
                        <div className='video'>
                            <img src="./img/play.svg" alt="" />
                        </div>
                        <div className='para'>
                            <p>For businesses and organizations - you can build communities and
                               engage audiences with one easy-to-use mobile app platform.</p>
                        </div>
                        <div className='butn'>
                            <div><Button text='Know More' bdr='3px solid #ffffff' colr='white'/></div>
                            <div><Button  text='Contact Us' bdr='3px solid #ffffff' colr='white'/></div>
                            
                            
                        </div>
                </div>
                
         </header>
             
        </div>
    )
}

export default Nav
