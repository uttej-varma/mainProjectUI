import "./registrationTopBar.css"
import { useNavigate } from "react-router-dom";
const RegistrationTopBar=(props)=>{
    const navigate=useNavigate();
    const Navigating=()=>{
           navigate("/login");
    }
    const NavigatingtoReg=()=>{
        navigate("/");
    }
    return(
        <>
         <nav id="LP-header-container">
                <div id="LP-header-left-col">
                    LAUNDRY
                </div>
                <div id="LP-header-right-col">
                    <div >
                        Home
                    </div>
                    <div>
                        Pricing
                    </div>
                    <div >
                        Career
                    </div>
                    {
                        props.login?<div onClick={NavigatingtoReg}>Register</div>:<div onClick={Navigating} >
                        Sign In
                    </div>
                    }
                </div>
            </nav>
            <hr id="LP-header-bottom-hr"></hr>
        </>
    )
}
export default RegistrationTopBar;