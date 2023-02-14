import RegistrationFooter from "../RegistrationFooter/registrationFooter";
import RegistrationLeftBody from "../registrationleftBody/registrationLeftBody"
import RegistrationTopBar from "../registrationTopBar/registrationTopBar";
import "./loginpage.css";

const LoginPage=()=>{
    return(
        <>
        <RegistrationTopBar/>
        <section className="loginFormMiddlePart">
            <RegistrationLeftBody loginpage={true}/>
            <div id="LP-main-block-2-container">
                <h1 >SIGN IN</h1>
                <div>
                    <label htmlFor="signin-email-mobile">Email</label>
                    <div>
                        <input  type="text" id="signin-email-mobile" className="signin-inputs" />
                    </div>
                </div>
                <div>
                    <label htmlFor="signin-password">Password</label>
                    <div>
                        <input type="password" id="signin-password" className="signin-inputs"/>
                    </div>
                </div>
                <p>Forget Password?</p>
                <button  id="form-sign-in-btn" >Sign In</button>
            </div>
        </section>
        <RegistrationFooter/>
        </>
    )
}
export default LoginPage