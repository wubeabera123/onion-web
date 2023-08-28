import male from "../Images/male.jpg";

const Upperfooter = () => {
    return (  
       <div className="upper">
          <div className="upp">
             <p style={{fontSize: "3.5rem",fontWeight: "600",color: "#f5f5f5"}}>What people say about Onion</p>
             <p style={{fontSize: "1rem",fontWeight: "00",color: "#f5f5f5"}}>Learn more about what people are saying about us.</p>
          </div>
          <div className="cols">
             <div className="cola">
                <p style={{color: "gold"}}>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </p>
                <h2 style={{color: "#f5f5f5"}}>Website Built</h2>
                <p style={{color: "#f5f5f5",marginTop: "1.5rem"}}>I had a fantastic experience working with OnionStudio <br /> Agency for my company's website redesign.From the initial consultation to the final product,the team was attentive, proffesional, and truly listened to my needs.</p>
                <div style={{display: "flex",marginTop: "1.5rem"}}>
                  <div class="circle-container ">
                     <img src={male} alt="Image"/>
                  </div>
                  <p style={{color: "#f5f5f5",padding: "10px"}}>Jessica Aledun <br />CEO at Finetech Amo</p>
                </div>
             </div>
             <div className="colb">
             <p style={{color: "gold"}}>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </p>
                <h2 style={{color: "#f5f5f5"}}>Shop Marketing</h2>
                <p style={{color: "#f5f5f5",marginTop: "1.5rem"}}>OnionStudio Agency helped us revamp our entire <br /> branding and marketing strategy, and we couldn't be happier with the results. The team was highly skilled communicative, and easy to work with.</p>
                <div style={{display: "flex",marginTop: "1.5rem"}}>
                  <div class="circle-container ">
                     <img src={male} alt="Image"/>
                  </div>
                  <p style={{color: "#f5f5f5",padding: "10px"}}>Jessica Aledun <br />CEO at Finetech Amo</p>
                </div>
             </div>
             <div className="colc">
             <p style={{color: "gold"}}>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </p>
                <h2 style={{color: "#f5f5f5"}}>Seo Improvement</h2>
                <p style={{color: "#f5f5f5",marginTop: "1.5rem"}}>I was blown away by the level of creativity and attention to <br /> detail that OnionStudio Agency brought to our project. They took the time to really understand our goals and vision, and they delivered a product.</p>
                <div style={{display: "flex",marginTop: "1.5rem"}}>
                  <div class="circle-container ">
                     <img src={male} alt="Image"/>
                  </div>
                  <p style={{color: "#f5f5f5",padding: "10px"}}>Jessica Aledun <br />CEO at Finetech Amo</p>
                </div>
             </div>
          </div>
          <div className="d-flex" style={{alignItems: "center",justifyContent: "center",marginTop: "3rem"}}>
          <p style={{color: "#f5f5f5",display: "flex",fontSize: "12px"}}>Testimonials based on:</p>
          <h4 style={{color: "#f5f5f5",marginLeft: "2%",marginTop: "-0.6rem"}}>oferteo Google</h4>
          </div>
       </div>
    );
}
 
export default Upperfooter;