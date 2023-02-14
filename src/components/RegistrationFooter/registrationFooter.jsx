import Footer from "../footer/footer"
import "./registrationFooter.css";

const RegistrationFooter=()=>{
    return(
        <>
         <section id="LP-footer-container">
                <div id="footer-1">
                    <p id="footer-1-line-1">Now Refer & Earn ₹500 for every referral*</p>
                    <p id="footer-1-line-2">* Terms and conditions will be applied</p>
                </div>
                <div id="footer-2">
                    <div>
                        <h2 >ABOUT US</h2>
                        <p >Doorstep Wash & Dryclean Service</p>
                    </div>
                    <div>
                        <h2>HOME</h2>
                        <p >Sign In</p>
                        <p >Register</p>
                    </div>
                    <div>
                        <h2>Pricing</h2>
                    </div>
                    <div>
                        <h2>Career</h2>
                        <p >Blogs</p>
                        <p >Create</p>
                    </div>
                    <div className="f3-contact">
                        <h2>Contact</h2>
                    </div>
                    <div>
                        <h2>Social Media</h2>
                        <div id="social-icons-container">
                            <div>
                                <img className="fb-icon" src="images/facebook.jpg" alt="Avatar"/>
                            </div>
                            <div>
                                <img className="insta-icon" src="images/instagram.jpg" alt="Avatar"/>
                            </div>
                            <div>
                                <img className="linkedin-icon" src="images/linkedin.jpg" alt="Avatar"/>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
            </section>
        </>
    )
}
export default RegistrationFooter;