import React, { useEffect, useState } from 'react';
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
const Address = () => {
    return ( 
        <div className="address">
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