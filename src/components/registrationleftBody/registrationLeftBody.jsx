import "./registrationLeftBody.css"
const RegistrationLeftBody=(props)=>{
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
                {!props.loginpage?<button>Sign-In</button>:<button>Register</button>}
            </section>
            </section>  
        </>
    )
}
export default RegistrationLeftBody;