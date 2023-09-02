import icon from "../Images/icon.png";

const Clients = () => {
    return ( 
        <div className="clients">
           <div style={{textAlign: "center",marginTop: "6rem"}}>
              <p style={{color: "#201f2f",fontWeight: "650",fontSize: "3.2rem",letterSpacing: "-1px"}}>Trusted By Our Clients</p>
              <p style={{color: "#201f2f",fontWeight: "600",fontSize: "1rem",marginTop: "-1rem"}}>We are glad that you have chosen us.</p>
           </div>
           <div className="contactinfo">
            <div style={{marginTop: "4rem"}}>
             <div className="text">
                 <p style={{color: "#201f2f",fontWeight: "650",fontSize: "3rem",lineHeight: "5rem",overflowWrap: "break-word", transform: "scaleY(1.1)",letterSpacing: "-1px"}}>Contact Us</p>
                 <p style={{color: "#201f2f",fontWeight: "500",fontSize: "1rem",marginTop: "1rem",lineHeight: "2rem",letterSpacing: "-1px"}}>Please book time and date and fill in the form. We will be in <br /> touch with you shortly.</p>
                 <h5 style={{color: "#8081c7"}} >
                   <img src={icon} style={{width: "20px"}}/>
                   <h5>Calendly</h5>
                 </h5>
             </div> 
             <div className="bt">
               <button className="whit-link" style={{backgroundColor: "white",color: "#333333",width: "10rem",height: "2.8rem",fontWeight: "700",fontSize: "0.8rem",borderRadius: "3px",marginTop: "2rem"}}>Book Calendly Meeting</button>
             </div>
            </div> 
           <div className="circl">
             <div className="smallcircles">
               <div className="smalldotted"></div>
             </div>
            </div>
         </div>
        </div>
     );
}
 
export default Clients;
