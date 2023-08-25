import logo from "../Images/logo.png"
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
    return ( 
      <header>
         <nav className="container navbar navbar-expand-sm  navbar-light">
            <div className="logo d-flex">
              <img src={logo} className="onionlogo" style={{width:"1.8rem",height: "1.8rem",marginTop: "0.3rem",marginRight: "0.5rem"}}/>
              <p style={{fontWeight: "bold",fontSize: "1.5rem",color: "#201f2f"}}>OnionStudio</p> 
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
            <button className="btn" style={{backgroundColor: "#6E368C",color: "white",width: "8.5rem",height: "2.4rem",fontSize: "0.8rem",marginRight: "4rem"}}>Get In Touch</button>
         </nav>
     </header>  
    );
}
 
export default Navbar;