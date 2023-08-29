import male from "../Images/male.jpg";

const Frontinfo = () => {
    return (  
      <div className="section">
         <div>
           <div className="text">
            <p style={{color: "#201f2f",fontWeight: "650",fontSize: "3.5rem",lineHeight: "5rem",overflowWrap: "break-word"}}>We Build Web Projects <br/>that Drives Sales.</p>
            <p style={{color: "#201f2f",fontWeight: "500",fontSize: "1.2rem",marginTop: "1rem",lineHeight: "2rem"}}>Product development from the scratch, gathering a <br/> dedicated team, or staff augumentation -- we can <br/>pick it up right where you left off.</p>
           </div> 
            <div className="btns">
            <button className="" style={{backgroundColor: "#6E368C",color: "#f5f5f5",width: "8.5rem",height: "2.7rem",fontWeight: "600",fontSize: "0.8rem",marginRight: "1rem",borderStyle: "none",borderRadius: "3px"}}>Get In Touch</button>
            <button className="whit-link" style={{backgroundColor: "#f5f5f5",color: "#444444",width: "10rem",height: "2.7rem",fontWeight: "700",fontSize: "0.8rem",borderRadius: "3px"}}>Check Our Cases</button>
            </div>
          </div>
         <div>
           <img className = "img_deg" src={male}/>
         </div>
     </div> 
    );
}
 
export default Frontinfo;