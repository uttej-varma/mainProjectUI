import CreateOrderBoxers from "../createOrderField/createOrderBoxers";
import CreateOrderJeans from "../createOrderField/createOrderJeans";
import CreateOrderJoggers from "../createOrderField/createOrderJoggers";
import CreateOrderOthers from "../createOrderField/createOrderOthers";
import CreateOrderShirt from "../createOrderField/createOrderShirt";
import CreateOrderTrousers from "../createOrderField/createOrdersTrousers";
import CreateOrderTshirt from "../createOrderField/createOrderTshirt";
import Footer from "../footer/footer";
import ViewSummary from "../orderlistsummary/viewsummary";
import SideBar from "../sidebar/sidebar";
import TopBar from "../topbar/topbar";
import "./createOrder.css";
import {useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateOrder=()=>{
  const navigate=useNavigate();
    const [summaryDisplay,setSummaryDisplay]=useState(false);
   
    
   
    const cancelClickHandler=()=>{
      // window.location.reload(false);
      navigate("/createOrderLanding");
    }
    return(
        <>
        <TopBar/>
        <section className="createOrdermiddlePart">
            <SideBar/>
        <section >
        <table >
            <thead>
              <tr className="createOrdermiddlePartTableHeader">
                <td>Product Type</td>
                <td>Quantity</td>
                <td>Wash type</td>
                <td className="createOrdermiddlePartTableHeaderPrice">price</td>
                <td></td>
              </tr> 
            </thead>
            <tbody>
                <CreateOrderShirt />
                <CreateOrderTshirt/>
                <CreateOrderTrousers/>
                <CreateOrderJeans/>
                <CreateOrderBoxers/>
                <CreateOrderJoggers/>
                <CreateOrderOthers/>
            </tbody>
            <tfoot>
              <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><button className="createOrdermiddlePartButton" onClick={()=>{setSummaryDisplay(true)}}>Proceed</button>
        <button className="createOrdermiddlePartButton" onClick={cancelClickHandler}>Cancel</button></td>
              </tr>
              
            </tfoot>

        </table> 
    </section>
  </section>
  
  <Footer/>
  {summaryDisplay&&<ViewSummary CreateOrder={true} exitHandler={setSummaryDisplay} />}
        </>
    )
}
export default CreateOrder;