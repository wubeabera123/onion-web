import male from "../Images/male.jpg";

const Frontinfo = () => {
    return (  
      <div className="row mt-5">
         <div className="col" style={{marginLeft: "5rem",marginTop: "6rem"}}>
            <h1 style={{color: "#201f2f",fontWeight: "650",fontSize: "3.5rem",whiteSpace: "nowrap"}}>We Build Web Projects <br/>that Drives Sales.</h1>
            <p style={{color: "#201f2f",fontWeight: "500",fontSize: "1.2rem",marginTop: "1rem",lineHeight: "2rem"}}>Product development from the scratch, gathering a <br/> dedicated team, or staff augumentation -- we can <br/>pick it up right where you left off.</p>
            <div className="row">
              <button className=" btn" style={{marginRight: "1rem",backgroundColor: "#6E368C",color: "white",width: "8rem",height: "2.4rem",fontSize: "0.8rem"}}>Get In Touch</button>
              <button className="btn" style={{backgroundColor: "white",color: "#222222",width: "8rem",height: "2.4rem",fontSize: "0.8rem",borderColor: "black", fontWeight: "500", textShadow: "6 4 8px rgba(0.4, 0.6, 0.2, 0.2)"}}>Check Our Cases</button>
            </div>
         </div>
         <div className="col" style={{marginLeft: "12rem"}}>
           <img src={male} style={{width: "20rem"}} />
         </div>
      </div>
    );
}
 
export default Frontinfo;