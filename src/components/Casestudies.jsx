
import ima from "../Images/ima.png";
import imb from "../Images/imb.png";
import imc from "../Images/imc.png";
import imd from "../Images/imd.png";

const Casestudies = () => {
    return ( 
      <div className="casestudies">
         <div style={{textAlign: "center"}}>
            <p style={{color: "#201f2f",fontWeight: "650",fontSize: "3.5rem",letterSpacing: "-1px"}}>Our Case Studies</p>
            <p style={{color: "#201f2f",fontWeight: "600",fontSize: "1rem",letterSpacing: "-1px"}}>We provide the Perfect Solution to your business growth.</p>
         </div>
         <div className="rowimga">
            <div className="a">
               <img src={ima} style={{width: "100%",borderRadius: "1rem"}}/>
               <h5 className="blur-text" style={{fontWeight:"bold",marginTop: "2rem",color: "#201f2f"}}>Digital Marketing Agency Website</h5>
               <p className="blur-text" style={{color: "#201f2f",marginTop:"1.8rem"}}>This is a website for a client who want to achieve their goals and meet users <br /> needs while also increasing their reach. Across all platforms. <br />This is a website rebrand.</p>
            </div>
            <div className="b">
                <img src={imb} style={{width:"100%",borderRadius: "1rem"}}/>
                <h5 className="blur-text" style={{fontWeight:"bold",marginTop: "2rem",color: "#201f2f"}}>Digital Marketing Agency Website</h5>
               <p className="blur-text" style={{color: "#201f2f",marginTop:"1.8rem"}}>This is a website for a client who want to achieve their goals and meet users <br /> needs while also increasing their reach. Across all platforms. <br /> This is a website rebrand.</p>
            </div>
         </div>
         <div className="rowimgb">
            <div className="c" style={{marginTop: "-14.7rem"}}>
               <img src={imc} style={{width: "100%",borderRadius: "1rem"}}/>
               <h5 className="blur-text" style={{fontWeight:"bold",marginTop: "2rem",color: "#201f2f"}}>Digital Marketing Agency Website</h5>
               <p className="blur-text" style={{color: "#201f2f",marginTop:"1.8rem"}}>This is a website for a client who want to achieve their goals and meet users <br /> needs while also increasing their reach. Across all platforms. <br />This is a website rebrand.</p>
            </div>
            <div className="d">
                <img src={imd} style={{width: "100%",borderRadius: "1rem"}}/>
                <h5 className="blur-text" style={{fontWeight:"bold",marginTop: "2rem",color: "#201f2f"}}>Digital Marketing Agency Website</h5>
                <p className="blur-text" style={{color: "#201f2f",marginTop:"1.8rem"}}>This is a website for a client who want to achieve their goals and meet users <br /> needs while also increasing their reach. Across all platforms. <br /> This is a website rebrand.</p>
            </div>
         </div>
         <button style={{display: "flex",justifyContent: "center"}} href="#">Check All Case Studies</button>
      </div>
     );
}
 
export default Casestudies;