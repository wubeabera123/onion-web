import male from "../Images/male.jfif";

const Frontinfo = () => {
    return (  
      <div className="row mt-5">
         <div className="col" style={{marginLeft: "3rem",marginTop: "6rem"}}>
            <h1 style={{color: "#333333",fontWeight: "650",fontSize: "3rem"}}>We Build Web Project that Drives Sales.</h1>
            <p style={{color: "#555555"}}>Product development from the scratch, gathering a dedicated team, or staff augumentation -- we can pick it up right where you left off.</p>
            <button className="btn" style={{marginRight: "1rem",backgroundColor: "#6E368C",color: "white",width: "8rem",height: "2.4rem",fontSize: "0.8rem"}}>Get In Touch</button>
            <button className="btn" style={{backgroundColor: "white",color: "#222222",width: "8rem",height: "2.4rem",fontSize: "0.8rem",borderColor: "black", fontWeight: "500", textShadow: "6 4 8px rgba(0.4, 0.6, 0.2, 0.2)"}}>Check Our Cases</button>
         </div>
         <div className="col" style={{marginLeft: "10rem"}}>
           <img src={male} style={{width: "20rem"}} />
         </div>
      </div>
    );
}
 
export default Frontinfo;