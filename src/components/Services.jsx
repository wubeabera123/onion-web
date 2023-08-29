import imi from "../Images/imi.png";
import imii from "../Images/imii.png";
import imiii from "../Images/imiii.png";
import React, { useEffect, useState } from 'react';
const Services = () => {
   const [diamonds, setDiamonds] = useState([]);

  useEffect(() => {
    const numDiamonds = 10; // Adjust the number of diamonds
    const newDiamonds = [];

    for (let i = 0; i <= numDiamonds; i++) {
      const diamondStyle = {
        top: Math.random() * 300 + 'vh',
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
         <div style={{textAlign: "center",marginTop: "6rem"}}>
            <p style={{color: "#201f2f",fontWeight: "650",fontSize: "3.2rem",letterSpacing: "-1px"}}>Our Main Services</p>
            <p style={{color: "#201f2f",fontWeight: "600",fontSize: "1rem",marginTop: "-1rem"}}>Our structured and transparent work process ensures hight-quality.</p>
         </div>
      
         <div className="serva container d-flex justify-content-between">
           <div className="rectangle">
              <img src={imi} style={{padding: "1.8rem",borderRadius: "5px"}}/>
           </div>
             <div style={{marginTop: "7rem"}}>
               <p style={{color: "#201f2f",fontWeight: "650",fontSize: "3rem",lineHeight: "5rem",overflowWrap: "break-word",lineHeight: "3.2rem"}}>E-Commerce <br /> Development</p>
               <p style={{color: "#201f2f",fontWeight: "500",fontSize: "1rem",marginTop: "1rem",lineHeight: "2rem",lineHeight: "1.5rem",letterSpacing: "-1px",marginTop: "2.8rem"}}>Your website is the cornerstone of your online presence. At our <br />agency, we specialize in creating web masterpieces that stand out <br /> from the crowd. Our team of expert designers and developers will <br /> work closely with you to create a website that not only looks great <br /> but also performs at its best.</p>
               <p style={{color: "#201f2f",fontWeight: "500",fontSize: "1rem",marginTop: "1rem",lineHeight: "2rem",lineHeight: "1.5rem",letterSpacing: "-1px",marginTop: "2.8rem"}} >Let us help you bring your vision to life and create a web <br /> masterpieces that represents your brand in the best possible light.</p>
                <div className="btns">
                  <button className="blue-link" style={{backgroundColor: "#6E368C",color: "white",width: "10rem",height: "2.5rem",fontWeight: "400",fontSize: "1rem",borderStyle: "none",borderRadius: "3px",marginTop: "-1rem"}}>Learn More</button>
                </div>
             </div> 
           </div>
           <div className="serva container d-flex justify-content-between mt-5">
             <div style={{marginTop: "7rem",marginLeft: "-3rem"}}>
               <p style={{color: "#201f2f",fontWeight: "650",fontSize: "3rem",lineHeight: "5rem",overflowWrap: "break-word",lineHeight: "3.2rem"}}>Marketing & <br /> Growth</p>
               <p style={{color: "#201f2f",fontWeight: "500",fontSize: "1rem",marginTop: "1rem",lineHeight: "2rem",lineHeight: "1.5rem",letterSpacing: "-1px",marginTop: "2.8rem"}}>Your website is the cornerstone of your online presence. At our <br />agency, we specialize in creating web masterpieces that stand out <br /> from the crowd. Our team of expert designers and developers will <br /> work closely with you to create a website that not only looks great <br /> but also performs at its best.</p>
               <p style={{color: "#201f2f",fontWeight: "500",fontSize: "1rem",marginTop: "1rem",lineHeight: "2rem",lineHeight: "1.5rem",letterSpacing: "-1px",marginTop: "2.8rem"}} >Let us help you bring your vision to life and create a web <br /> masterpieces that represents your brand in the best possible light.</p>
                <div className="btns">
                  <button className="blue-link" style={{backgroundColor: "#6E368C",color: "white",width: "10rem",height: "2.5rem",fontWeight: "400",fontSize: "1rem",borderStyle: "none",borderRadius: "3px",marginTop: "-1rem"}}>Learn More</button>
                </div>
             </div> 
             <div className="rectanglea bg-dark">
              <img src={imii} style={{paddingTop: "2rem",marginLeft: "-12rem",borderRadius: "5px"}}/>
             </div>
           </div>
           <div className="serva container d-flex justify-content-between mt-5">
           <div className="rectangle">
              <img src={imiii} style={{padding: "1.8rem",borderRadius: "5px"}}/>
           </div>
             <div className="serv" style={{marginTop: "7rem"}}>
               <p style={{color: "#201f2f",fontWeight: "650",fontSize: "3rem",lineHeight: "5rem",overflowWrap: "break-word",lineHeight: "3.2rem"}}>Website <br /> Development</p>
               <p style={{color: "#201f2f",fontWeight: "500",fontSize: "1rem",marginTop: "1rem",lineHeight: "2rem",lineHeight: "1.5rem",letterSpacing: "-1px",marginTop: "2.8rem"}}>Your website is the cornerstone of your online presence. At our <br />agency, we specialize in creating web masterpieces that stand out <br /> from the crowd. Our team of expert designers and developers will <br /> work closely with you to create a website that not only looks great <br /> but also performs at its best.</p>
               <p style={{color: "#201f2f",fontWeight: "500",fontSize: "1rem",marginTop: "1rem",lineHeight: "2rem",lineHeight: "1.5rem",letterSpacing: "-1px",marginTop: "2.8rem"}} >Let us help you bring your vision to life and create a web <br /> masterpieces that represents your brand in the best possible light.</p>
                <div className="btns">
                  <button className="blue-link" style={{backgroundColor: "#6E368C",color: "white",width: "10rem",height: "2.5rem",fontWeight: "400",fontSize: "1rem",borderStyle: "none",borderRadius: "3px",marginTop: "-1rem"}}>Learn More</button>
                </div>
             </div> 
           </div>
     </div>
  );
}
 
export default Services;
