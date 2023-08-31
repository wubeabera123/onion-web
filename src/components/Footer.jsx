import logo from "../Images/logo.png"
const Footer = () => {
    return (
        <div className="Foot">
            <div className="foot d-flex justify-content-around" style={{paddingTop: "6rem"}}>
              <div className="footlogo">
                <div className="logo d-flex">
                  <img src={logo} className="onion" style={{width:"1.8rem",height: "1.8rem",marginTop: "0.3rem",marginRight: "0.5rem",borderRadius: "11px"}}/>
                  <p className="onionstud" style={{fontWeight: "bold",fontSize: "1.5rem",color: "#f5f5f5"}}>OnionStudio</p> 
                </div>
                <p style={{color: "#d2c1c1",letterSpacing: "0px",fontSize: "14.8px",lineHeight: "25px",marginTop: "0.5rem"}}>Product development from scratch, <br />gathering a dedicated team, or staff <br />augmentation-we can pick it up right <br />where you left off.</p>
               </div>
               <div>
                <p style={{fontWeight: "500",fontSize: "1.1rem",color: "#f5f5f5"}}>Services</p> 
                <div className="vertical-links">
                   <a href="#" style={{textDecoration: "none",color: "#d2c1c1",letterSpacing: "-0.5px",fontSize: "15px",lineHeight: "30px"}}>E-commerce Development</a>
                   <a href="#" style={{textDecoration: "none",color: "#d2c1c1",letterSpacing: "-0.5px",fontSize: "15px",lineHeight: "30px"}}>SEO Development</a>
                   <a href="#" style={{textDecoration: "none",color: "#d2c1c1",letterSpacing: "-0.5px",fontSize: "15px",lineHeight: "30px"}}>E-commerce Development</a>
                   <a href="#" style={{textDecoration: "none",color: "#d2c1c1",letterSpacing: "-0.5px",fontSize: "15px",lineHeight: "30px"}}>Marketing & Growth</a>
                </div>
              </div>
              <div>
                <p style={{fontWeight: "500",fontSize: "1.1rem",color: "#f5f5f5"}}>Company</p> 
                <div className="vertical-links">
                   <a href="#" style={{textDecoration: "none",color: "#d2c1c1",letterSpacing: "-0.5px",fontSize: "15px",lineHeight: "30px"}}>About Us</a>
                   <a href="#" style={{textDecoration: "none",color: "#d2c1c1",letterSpacing: "-0.5px",fontSize: "15px",lineHeight: "30px"}}>Case Studies</a>
                   <a href="#" style={{textDecoration: "none",color: "#d2c1c1",letterSpacing: "-0.5px",fontSize: "15px",lineHeight: "30px"}}>Careers</a>
                   <a href="#" style={{textDecoration: "none",color: "#d2c1c1",letterSpacing: "-0.5px",fontSize: "15px",lineHeight: "30px"}}>Contact Us</a>
                </div>
              </div>
              
              <div>
                <p style={{fontWeight: "500",fontSize: "1.1rem",color: "#f5f5f5"}}>Resources</p> 
                <div className="vertical-links">
                   <a href="#" style={{textDecoration: "none",color: "#d2c1c1",letterSpacing: "-0.5px",fontSize: "15px",lineHeight: "30px"}}>Privacy & Policy</a>
                   <a href="#" style={{textDecoration: "none",color: "#d2c1c1",letterSpacing: "-0.5px",fontSize: "15px",lineHeight: "30px"}}>Terms of Use</a>
                </div>
              </div>
              <div> 
                <p style={{fontWeight: "500",fontSize: "1.1rem",color: "#f5f5f5"}}>Social Media</p> 
                <div className="vertical-links">
                   <a href="#" style={{textDecoration: "none",color: "#d2c1c1",letterSpacing: "-0.5px",fontSize: "15px",lineHeight: "30px"}}>Facebook</a>
                   <a href="#" style={{textDecoration: "none",color: "#d2c1c1",letterSpacing: "-0.5px",fontSize: "15px",lineHeight: "30px"}}>Instagram</a>
                   <a href="#" style={{textDecoration: "none",color: "#d2c1c1",letterSpacing: "-0.5px",fontSize: "15px",lineHeight: "30px"}}>Linkedin</a>
                </div>
             </div>
            </div>
            <p style={{color: "#d2c1c1",letterSpacing: "0px",fontSize: "14.8px",lineHeight: "25px",marginTop: "6.5rem",marginLeft: "5%"}}>OnionStudio. 2023. All Rights Are Reserved.</p>
        </div> 
      );
}
export default Footer;