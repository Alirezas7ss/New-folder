import React from 'react'
import './cv.css'
import back from '../../assets/untitled-e2.webp'
import { Link } from 'react-router-dom'
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
export default function Cv() {
  return (
    <div className='cvContainer'>
    <Link to='/' className='linkHome' >HOME</Link>
    <a href="/images/myw3schoolsimage.jpg" className='downloadCv' download>DOWNLOAD</a>
      <div className='textContainer'>   
        <div className='leftText'>
         <h1>Alireza</h1>
         <h2>soltanian</h2>
         <p><span>About Me :</span><br/>
            I am currently frontend and solidity                    developer,
            have done several projects that  you can see 
             inside my github and more regularly
            see it on my portfolio website ,
            everything with the details like my skills 
              and projects and communication channels in
            the portfolio .
            {/* <br/><br></br><br></br><span>EXPERIENCES :</span><br/><br></br><br></br><span>EDUCATION  : </span> */}
        </p>
        </div>
        <div className='line'>
           <h1>|</h1>
        </div>
        <div className='rightText'>
          <div>
            <a href='/' target='_blank'><MdEmail />&nbsp;&nbsp;EMAIL&nbsp;&nbsp;:&nbsp;&nbsp;alirezas76s76@gmail.com</a>
          </div>
          <div>
            <a href='https://t.me/ali76rez' target='_blank'><FaTelegramPlane />&nbsp;&nbsp;TELEGRAM&nbsp;&nbsp;:&nbsp;&nbsp;@ali76rez</a>
          </div>
          <div>
            <a href='https://www.linkedin.com/in/alireza-soltanian76-nonstop/' target='_blank'><GrLinkedin />&nbsp;&nbsp;LINKEDIN&nbsp;&nbsp;:&nbsp;&nbsp;alireza-soltanian76-nonstop</a>
          </div>
          <p><span>SKILLS :</span><br/>
          FrontEnd ( Javascript ,React , Nextjs , Typescript ,
           
          Redux , Css , Html ,Sass )<br/>
           
          Blockchain ( Solidity , Web3 js ,
           
          Ether js , Truffle , Hardhat )<br/>
          
          UI/UX ( Figma , Photoshop )<br></br><br></br>
          
          
          <span>PORTFOLIO :</span><br/>
           
          I have created a  portfolio page
           which is the main  place to share
           my portfolio .But I share them in other places as well, like 
           Github and dribbble<br></br>
           
                PortfolioPage : https://soltanianportfolio.vercel.app/home<br/>
                Github : https://github.com/Alirezas7ss <br/>
                Dribbble : https://dribbble.com/Soltanian76 <br/><br></br>
          
          
          
                <span>PRO SKILLS :</span><br/>
                Premiere<br/>
                 
                Photoshop<br/>
                 
                Kyshot<br/>
                Team work<br/>
                Research <br/>
                  </p>
                        </div>
                      </div>
                      <img src={back} alt='im' />
          
              </div>
  )
}
