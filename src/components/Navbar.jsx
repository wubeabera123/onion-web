import logo from "../Images/logo.png"

const Navbar = () => {
    return (  
        <div className="naba d-flex" style={{alignItems: "center"}}>
            <div className="logo d-flex mt-3" style={{marginLeft: "3rem"}}>
                <img src={logo} className="onionlogo" style={{width:"1.8rem",height: "1.8rem",marginTop: "0.3rem",marginRight: "0.5rem"}} alt=""/>
                <p style={{fontWeight: "bold",fontSize: "1.5rem"}}>OnionStudio</p>
            </div>
               <nav className="navbar navbar-expand-lg" style={{marginLeft: "8rem"}}>
                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                 </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    
                     <li className="nav-item active" style={{marginRight: "1.4rem"}}>
                       <a className="nav-link" href="#" style={{color:"#444444",fontWeight: "bold"}}>About</a>
                     </li>
                     <li className="nav-item" style={{marginRight: "1.4rem"}}>
                       <a className="nav-link" href="#" style={{color:"#444444",fontWeight: "bold"}}>Services</a>
                     </li>
                     <li className="nav-item" style={{marginRight: "1.4rem"}}>
                       <a className="nav-link" href="#" style={{color:"#444444",fontWeight: "bold"}}>Case Studies</a>
                     </li>
                     <li className="nav-item" style={{marginRight: "1.4rem"}}>
                       <a className="nav-link" href="#" style={{color:"#444444",fontWeight: "bold"}}>Careers</a>
                     </li>
                     <li className="nav-item">
                       <a className="nav-link" href="#" style={{color:"#444444",fontWeight: "bold"}}>Contact</a>
                     </li>
                   </ul>
                 </div>
             </nav>
          <button className="btn ms-auto" style={{marginRight: "4rem",backgroundColor: "#6E368C",color: "white",width: "8rem",height: "2.4rem",fontSize: "0.8rem"}}>Get In Touch</button>
        </div>
    );
}
 
export default Navbar;