import RegistrationFooter from "../RegistrationFooter/registrationFooter";
import RegistrationLeftBody from "../registrationleftBody/registrationLeftBody"
import RegistrationTopBar from "../registrationTopBar/registrationTopBar";
import "./loginpage.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import CreateContext from "../orderSummaryContext/createContext";

const LoginPage=()=>{
    const userHandling=useContext(CreateContext);
    const navigate=useNavigate();
   const [form,setForm]=useState({email:"",password:""});
   const loginPermission=form.email.length&&form.password.length;
//    console.log(form);
   const logIn=async(e)=>{
    if(loginPermission)
    {
        e.preventDefault();
        await axios.post("http://localhost:3400/api/v1/user/login",form).then((response)=>{
            if(response.data.message==="user logged in")
            {
                localStorage.removeItem("userData");
                // localStorage.removeItem("client");
                localStorage.setItem("userData",JSON.stringify(response.data));
            //    console.log(JSON.parse(localStorage.getItem("userData")));
                 navigate("/createOrderLanding");
                 userHandling.setDynamic({...userHandling.dynamic,userFrontend:{
                    userName:response.data.userName,
                    address:response.data.address,
                    location:response.data.location
                   }});
                   

            }
            else if(response.data.message==="user should register")
            {
                alert("user should be registered");
                navigate("/")

            }
        })
        .catch((err)=>{
            if(err.response.data.message==="invalid credentials")
            {
                alert("invalid password");
            }
        })

       
    }
    else{
        e.preventDefault();
        alert("all fields are manidatory");
        
    }
   }

    return(
        <>
        <RegistrationTopBar login={true}/>
        <section className="loginFormMiddlePart">
            <RegistrationLeftBody loginpage={true}/>
            <div id="LP-main-block-2-container">
                <h1 >SIGN IN</h1>
                <div>
                    <label htmlFor="signin-email-mobile">Email</label>
                    <div>
                        <input  type="text" id="signin-email-mobile" className="signin-inputs" onChange={(e)=>{setForm({...form,email:e.target.value})}} value={form.email} />
                    </div>
                </div>
                <div>
                    <label htmlFor="signin-password">Password</label>
                    <div>
                        <input type="password" id="signin-password" className="signin-inputs" onChange={(e)=>{setForm({...form,password:e.target.value})}} value={form.password}/>
                    </div>
                </div>
                <p>Forget Password?</p>
                <button  id="form-sign-in-btn" onClick={(e)=>{logIn(e)}} >Sign In</button>
            </div>
        </section>
        <RegistrationFooter/>
        </>
    )
}
export default LoginPage