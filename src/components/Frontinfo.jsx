import male from "../Images/male.png";
import React, { useEffect, useState } from 'react';

const Frontinfo = () => {
  
  const [diamonds, setDiamonds] = useState([]);

  useEffect(() => {
    const numDiamonds = 6; // Adjust the number of diamonds
    const newDiamonds = [];

    for (let i = 0; i <= numDiamonds; i++) {
      const diamondStyle = {
        top: Math.random() * 70 + 'vh',
        left: Math.random() * 100 + 'vw',
        right: Math.random() * 100 + 'vh',
        //width: Math.random() * 20 + 5 + 'px', // Random width between 5 and 25 pixels
       // height: Math.random() * 20 + 5 + 'px', // Random height between 5 and 25 pixels
        backgroundColor: randomColor(), // Random background color
      };
      newDiamonds.push(<div key={i} className="diamond" style={diamondStyle}></div>);
    }

    setDiamonds(newDiamonds);
  }, []);
  const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
    return (  
      <div>
           <i className="diamond-container">
             {diamonds.map((diamond) => diamond)}
           </i>
       <div className="row container mt-5 ms-5 flex-column flex-md-row flex-sm-row">
         <div className="col-6 mt-5 ">
           <div>
            <p className="texttitle" style={{color: "#201f2f",fontWeight: "650",fontSize: "3.5rem",lineHeight: "5rem",overflowWrap: "break-word"}}>We Build Web Projects <br />that Drives Sales.</p>
            <p className="text" style={{color: "#201f2f",fontWeight: "500",fontSize: "1.2rem",marginTop: "1rem",lineHeight: "2rem"}}>Product development from the scratch, gathering a <br/> dedicated team, or staff augumentation -- we can <br/>pick it up right where you left off.</p>
           </div> 
            <div className="btns">
              <button className="" style={{backgroundColor: "#6E368C",color: "#f5f5f5",width: "8.5rem",height: "2.7rem",fontWeight: "600",fontSize: "0.8rem",marginRight: "1rem",borderStyle: "none",borderRadius: "3px"}}>Get In Touch</button>
              <button className="whit-link" style={{backgroundColor: "#f5f5f5",color: "#444444",width: "10rem",height: "2.7rem",fontWeight: "700",fontSize: "0.8rem",borderRadius: "3px"}}>Check Our Cases</button>
            </div>
          </div>
         <div className="col-6 " style={{marginTop: "-2rem"}}>
            <img src={male} className="frontimg" style={{objectFit: "cover",marginLeft: "6rem"}}/>
         </div>
     </div> 
   </div>
    );
}
 
export default Frontinfo;