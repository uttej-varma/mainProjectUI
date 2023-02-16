import "./registrationLeftBody.css"
import { useNavigate } from "react-router-dom";
const RegistrationLeftBody=(props)=>{
    const navigate=useNavigate();
    const goToSignIn=()=>{
        navigate("/login");
    }
    const goToRegister=()=>{
        navigate("/");
    }
    return(
        <>
          <section id={!props.loginpage?"registrationLeftBodyContainer":"loginLeftBodyContainer"}>
            <section id={!props.loginpage?"registrationLeftBodyContainertopPart":"loginLeftBodyContainertopPart"}>
                <h1>LAUNDARY</h1>
                <h1>SERVICE</h1>
               {!props.loginpage? <p>DoorWash & 
                Dryclean Service</p>:<p>DoorWash & Dryclean Service</p>}
            </section>
            <section id={!props.loginpage?"registrationLeftBodyContainerbottomPart":"loginLeftBodyContainerbottomPart"}>
                {!props.loginpage?<p>Already have Account ?</p>:<p>Don't have an Account ?</p>}
                {!props.loginpage?<button onClick={goToSignIn}>Sign-In</button>:<button onClick={goToRegister}>Register</button>}
            </section>
            </section>  
        </>
    )
}
export default RegistrationLeftBody;