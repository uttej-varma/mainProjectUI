import Footer from "../footer/footer";
import "./createOrderLandingPage.css";
import SideBar from "../sidebar/sidebar";
import TopBar from "../topbar/topbar";
import { useNavigate } from "react-router-dom";


const CreateOrderLanding=()=>{
    const navigate=useNavigate();
    
    return(
        <>
        <TopBar/>
        <section className="createOrdermiddlePart">
            <SideBar/>
            <section>
            <button onClick={()=>{navigate("/createOrderPage")}}>Create Order</button>
            </section>
        <section >
        
    </section>
  </section>
  <Footer/>
        </>
    )
}
export default CreateOrderLanding;