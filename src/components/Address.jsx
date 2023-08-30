import React, { useEffect, useState } from 'react';
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
const Address = () => {
    const [diamonds, setDiamonds] = useState([]);

  useEffect(() => {
    const numDiamonds = 6; // Adjust the number of diamonds
    const newDiamonds = [];

    for (let i = 0; i <= numDiamonds; i++) {
      const diamondStyle = {
        top: Math.random() * 20 + 'vh',
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
        <div className="address">
             <i className="diamond-container">
             {diamonds.map((diamond) => diamond)}
             </i>
            <div className="add">
              <p style={{fontSize: "3rem",fontWeight: "650",color: "#f5f5f5",lineHeight: "3.2rem"}}>Sounds Good? <br /> Let's Grow Your Business. </p>
            </div>
            <div class="container mt-5">
              <div class="row justify-content-center">
                <div class="col-md-5">
                  <input type="text" class="form-control" placeholder="Your Email Address" />
                  <span className="input-icon">
                     <BsFillArrowRightSquareFill size={36}/>
                  </span>
                </div>
             </div>
           </div>
        </div>
     );
}
 
export default Address;