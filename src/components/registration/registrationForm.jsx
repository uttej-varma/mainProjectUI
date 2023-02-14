
import RegistrationLeftBody from "../registrationleftBody/registrationLeftBody";
import RegistrationTopBar from "../registrationTopBar/registrationTopBar";
import RegistrationFooter from "../RegistrationFooter/registrationFooter";
import "./registrationForm.css";
import { useState } from "react";
import axios from "axios"

const RegistrationForm=()=>{
    const [form,setForm]=useState({userName:"",email:"",phone:"",state:"",district:"",address:"",pincode:"",password:""});
    const [error,errorHandler]=useState({userName:{isValid:true,message:""},email:{isValid:true,message:""},phone:{isValid:true,message:""},
    pincode:{isValid:true,message:""},password:{isValid:true,message:""}});
    const [confirmPassword,setConfirmPassword]=useState({isValid:true,message:""});
    const [tick,setTick]=useState(false);
    const registerButtonValid=form.userName.length&&form.email.length&&form.phone.toString().length&&form.state.length&&form.district.length&&
    form.address.length&&form.pincode.toString().length&&form.password.length&& tick&&confirmPassword.isValid;
    const [mainMessage,setMainMessage]=useState("");
    const registerSubmitted=async(e)=>{
       
        if(registerButtonValid){
            e.preventDefault();
            console.log("working");
       await axios.post("http://localhost:3400/api/v1/user/register",{
        name:form.userName,
        email:form.email,
        password:form.password,
        phone:form.phone,
        state:form.state,
        district:form.district,
        address:form.address,
        pincode:form.pincode
       }).then((response)=>{console.log(response.data)}).catch((err)=>{
            if(err.response.data.message==="user already exist")
            {
                setMainMessage("Email already exist");
            }
            else if(err.response.data.message==="mobile number already registered")
            setMainMessage("mobile number already registered");
         });
        }
        else{
            e.preventDefault();
            alert("all fields are Manidatory");
        }
        
    }
    const errorMessageHandler=(type)=>{
              switch(type){
                case "userName":{
                    if(form.userName.length>=5 && form.userName.length<=10)
                    {
                        
                          errorHandler({...error,userName:{isValid:true,message:""}});                   
                     }
                    else{
                        setForm({...form,userName:""});
                        errorHandler({...error,userName:{isValid:false,message:"The number of charecters should be between 5 and 10 "}})
                    }
                    break;
                }
                case "email":{
                    let regexEmail=/^\w+([\.-]?\w+)*@gmail\.com$/g;
                    if(regexEmail.test(form.email))
                    {
                        errorHandler({...error,email:{isValid:true,message:""}});    
                    }
                    else{
                        setForm({...form,email:""});
                        errorHandler({...error,email:{isValid:false,message:"please give a valid Email befor @ only . and - are allowed"}})
                    }
                    break;
                }
                case "phone":{
                    let regexPhone=/^[6,7,8,9]/g;
                    if(regexPhone.test(form.phone) && form.phone.toString().length===10)
                    {
                        errorHandler({...error,phone:{isValid:true,message:""}});
                    }
                    else{
                        setForm({...form,phone:""});
                        errorHandler({...error,phone:{isValid:false,message:"please give a valid 10 digit mobile number"}})
                    }
                    break
                }
                case "pincode":{
                    if(form.pincode.toString().length===6 && form.pincode.toString()[0]!=="0" )
                    {
                        errorHandler({...error,pincode:{isValid:true,message:""}});
                    }
                    else{
                        setForm({...form,pincode:""});
                        errorHandler({...error,pincode:{isValid:false,message:"please give a valid 6 digit pin code"}})
                    }
                    return;
                }
                case "password":{
                    if(form.password.length>=5 && form.password.length<=12)
                    {
                        errorHandler({...error,password:{isValid:true,message:""}});
                    }
                    else{
                        setForm({...form,password:""});
                        errorHandler({...error,password:{isValid:false,message:"The number of charecters should be between 5 and 12 "}})
                    }
                    return;
                }
    
                default:{
                    setForm({...form});
                    break;
                }
              }
    }
    const functionConfirm=(e)=>{
        if(e.target.value===form.password && form.password!=="")
        {
            setConfirmPassword({isValid:true,message:""})
        }
        else{
            setConfirmPassword({isValid:false,message:"password & confirm password are not same"})
        }
    }
    const tickHandler=()=>{
        if(tick===false)
        {
            setTick(true);
        }
        else{
            setTick(false);
        }
    }
    return(
        <>
          <RegistrationTopBar/>
          <section className="registrationFormMiddlePart">
            <RegistrationLeftBody/>
            <section id="regForm">
                <div id="regForm-container">
                    <h1 >Registration</h1>
                    <form>
                        <div id="input-field-block">
                            <div>
                                <label htmlFor="Name">Name<span style={{color:"red"}}>*</span></label>
                                <div>
                                    <input className="regForm-inputs"  id="Name" type="text" onChange={(e)=>{setForm({...form,userName:e.target.value})}} onBlur={()=>{errorMessageHandler("userName")}} value={form.userName}/>
                                </div>
                                {error.userName.isValid?null:<div style={{color:"red"}}>{error.userName.message}</div>}
                            </div>
                            <div>
                                <label htmlFor="Email">Email<span style={{color:"red"}}>*</span></label>
                                <div>
                                    <input className="regForm-inputs"  id="Email" type="Email"  onChange={(e)=>{setForm({...form,email:e.target.value})}} onBlur={()=>{errorMessageHandler("email")}} value={form.email}/>
                                </div>
                                {error.email.isValid?null:<div style={{color:"red"}}>{error.email.message}</div>}
                            </div>
                            <div>
                                <label htmlFor="Phone">Phone<span style={{color:"red"}}>*</span></label>
                                <div>
                                    <input className="regForm-inputs"  id="Phone" type="number" onChange={(e)=>{setForm({...form,phone:e.target.value})}} onBlur={()=>{errorMessageHandler("phone")}} value={form.phone}/>
                                </div>
                                {error.phone.isValid?null:<div style={{color:"red"}}>{error.phone.message}</div>}
                            </div>
                            <div>
                                <label htmlFor="State">State<span style={{color:"red"}}>*</span></label>
                                <div>
                                    <input className="regForm-inputs"  id="State" type="text" onChange={(e)=>{setForm({...form,state:e.target.value})}} value={form.state}/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="District">District<span style={{color:"red"}}>*</span></label>
                                <div>
                                    <input className="regForm-inputs"  id="District" type="text" onChange={(e)=>{setForm({...form,district:e.target.value})}} value={form.district}/>
                                </div>
                            </div>
                            <div>
                                <label  htmlFor="Address">Address<span style={{color:"red"}}>*</span></label>
                                <div>
                                    <input className="regForm-inputs" id="Address" type="text" onChange={(e)=>{setForm({...form,address:e.target.value})}} value={form.address}/>
                                </div>
                            </div>
                            <div>
                                <label  htmlFor="Pincode">Pincode<span style={{color:"red"}}>*</span></label>
                                <div>
                                    <input className="regForm-inputs" id="Pincode" type="number" onChange={(e)=>{setForm({...form,pincode:e.target.value})}} onBlur={()=>{errorMessageHandler("pincode")}} value={form.pincode}/>
                                </div>
                                {error.pincode.isValid?null:<div style={{color:"red"}}>{error.pincode.message}</div>}
                            </div>
                            <div>
                                <label htmlFor="Password">Password<span style={{color:"red"}}>*</span></label>
                                <div>
                                    <input className="regForm-inputs" id="Password" type="Password" onChange={(e)=>{setForm({...form,password:e.target.value})}} onBlur={()=>{errorMessageHandler("password")}} value={form.password}/>
                                </div>
                                {error.password.isValid?null:<div style={{color:"red"}}>{error.password.message}</div>}
                            </div>
                            <div>
                                <label  htmlFor="ConfirmPassword">Confirm Password<span style={{color:"red"}}>*</span></label>
                                <div>
                                    <input className="regForm-inputs" type="password" id="ConfirmPassword" onChange={functionConfirm} value={confirmPassword.value}/>
                                </div>
                                {confirmPassword.isValid?null:<div style={{color:"red"}}>{confirmPassword.message}</div>}
                            </div>
                            
                        </div>
                        <div id="agreement-block">
                            <input htmlFor="agreement" type="checkbox" onClick={tickHandler} />
                            <p  id="agreement">I agree to TermsNConditions & Condition receiving marketing and promotional materials</p>
                        </div>
                        <div>
                            <button id="regForm-Btn-2"  onClick={registerSubmitted} >Register</button>
                            <div style={{color:"red"}}>{mainMessage}</div>
                        </div>
                    </form>
                </div>
            </section>
          </section>
          <RegistrationFooter/>
        </>
    )
}
export default RegistrationForm;