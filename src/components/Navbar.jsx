import logo from "../Images/logo.png"
import { useState } from "react";

const Navbar = () => {

    return ( 
      <header>
         <nav className="container navbar navbar-expand-sm  navbar-light">
            <div className="logo d-flex">
              <img src={logo} className="onionlogo" style={{width:"1.8rem",height: "1.8rem",marginTop: "0.3rem",marginRight: "0.5rem"}}/>
              <p className="logotext" style={{fontWeight: "bold",fontSize: "1.5rem",color: "#201f2f"}}>OnionStudio</p> 
            </div>
           <div className="ms-auto"> 
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
           </div>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                 <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                 </li>
                 <li className="nav-item">
                    <a className="nav-link" href="#">Services</a>
                 </li>
                 <li className="nav-item">
                    <a className="nav-link" href="#">Case Studies</a>
                 </li>
                 <li className="nav-item">
                    <a className="nav-link" href="#">Careeres</a>
                 </li>
                 <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                 </li>
               </ul>
            </div>
         </nav>
         <button className="btn" style={{backgroundColor: "#6E368C",color: "#f5f5f5",width: "11rem",height: "2.8rem",fontSize: "1rem",marginRight: "4rem"}}>Get In Touch</button>
     </header>  
    );
}
 
export default Navbar;