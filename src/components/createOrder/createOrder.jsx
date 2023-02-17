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
import CreateContext from "../orderSummaryContext/createContext";
import { useContext } from "react";

const CreateOrder=()=>{
  const navigate=useNavigate();
    const [summaryDisplay,setSummaryDisplay]=useState(false);
    const summaryHandling=useContext(CreateContext);
    const [postData,setPostData]=useState({
      location:"",
      city:"",
      totalItems:0,
      totalPrice:0,
      summary:{
          address:"",
          body:{},
          userName:"",
      }
  });
  const setSummary=()=>{
    setSummaryDisplay(true);
  }
  const orderPosting=()=>{
    let totalQuantity=0;
    let totalCost=0;
    let obj={};
    if(summaryHandling.dynamic.shirts.isValidShirts===true)
    {totalQuantity+=summaryHandling.dynamic.shirts.quantity;
        totalCost+=summaryHandling.dynamic.shirts.totalCost*summaryHandling.dynamic.shirts.quantity;
        obj={...obj,shirts:{type:"Shirts",
        service:[summaryHandling.dynamic.shirts.washing.type,summaryHandling.dynamic.shirts.iron.type,summaryHandling.dynamic.shirts.drywash.type,summaryHandling.dynamic.shirts.chemicalwash.type]}}
    }
    if(summaryHandling.dynamic.tShirts.isValidTShirts===true){totalQuantity+=summaryHandling.dynamic.tShirts.quantity;
        totalCost+=summaryHandling.dynamic.tShirts.totalCost*summaryHandling.dynamic.tShirts.quantity;
        obj={...obj,tShirts:{type:"T-Shirts",
        service:[summaryHandling.dynamic.tShirts.washing.type,summaryHandling.dynamic.tShirts.iron.type,summaryHandling.dynamic.tShirts.drywash.type,summaryHandling.dynamic.tShirts.chemicalwash.type]}}
    }
    if(summaryHandling.dynamic.trousers.isValidTrousers===true){totalQuantity+=summaryHandling.dynamic.trousers.quantity;
        totalCost+=summaryHandling.dynamic.trousers.totalCost*summaryHandling.dynamic.trousers.quantity;
        obj={...obj,trousers:{type:"Trousers",
        service:[summaryHandling.dynamic.trousers.washing.type,summaryHandling.dynamic.trousers.iron.type,summaryHandling.dynamic.trousers.drywash.type,summaryHandling.dynamic.trousers.chemicalwash.type]}}
    }
    if(summaryHandling.dynamic.jeans.isValidJeans===true){totalQuantity+=summaryHandling.dynamic.jeans.quantity;
        totalCost+=summaryHandling.dynamic.jeans.totalCost*summaryHandling.dynamic.jeans.quantity;
        obj={...obj,jeans:{type:"Jeans",
        service:[summaryHandling.dynamic.jeans.washing.type,summaryHandling.dynamic.jeans.iron.type,summaryHandling.dynamic.jeans.drywash.type,summaryHandling.dynamic.jeans.chemicalwash.type]}}
    }
    if(summaryHandling.dynamic.boxers.isValidBoxers===true){totalQuantity+=summaryHandling.dynamic.boxers.quantity;
        totalCost+=summaryHandling.dynamic.boxers.totalCost*summaryHandling.dynamic.boxers.quantity;
        obj={...obj,boxers:{type:"Boxers",
        service:[summaryHandling.dynamic.boxers.washing.type,summaryHandling.dynamic.boxers.iron.type,summaryHandling.dynamic.boxers.drywash.type,summaryHandling.dynamic.boxers.chemicalwash.type]}}
    }
    if(summaryHandling.dynamic.joggers.isValidJoggers===true){totalQuantity+=summaryHandling.dynamic.joggers.quantity;
        totalCost+=summaryHandling.dynamic.joggers.totalCost*summaryHandling.dynamic.joggers.quantity;
        obj={...obj,joggers:{type:"Joggers",
        service:[summaryHandling.dynamic.joggers.washing.type,summaryHandling.dynamic.joggers.iron.type,summaryHandling.dynamic.joggers.drywash.type,summaryHandling.dynamic.joggers.chemicalwash.type]}}
    }
    if(summaryHandling.dynamic.others.isValidOthers===true){totalQuantity+=summaryHandling.dynamic.others.quantity;
        totalCost+=summaryHandling.dynamic.others.totalCost*summaryHandling.dynamic.others.quantity;
        obj={...obj,others:{type:"Others",
        service:[summaryHandling.dynamic.others.washing.type,summaryHandling.dynamic.others.iron.type,summaryHandling.dynamic.others.drywash.type,summaryHandling.dynamic.others.chemicalwash.type]}}
    }

    setPostData({...postData,
    location:JSON.parse(localStorage.getItem('userData')).location,
    city:JSON.parse(localStorage.getItem('userData')).location,
    totalItems:totalQuantity,
    totalPrice:totalCost,
    summary:{...postData.summary.body,
        address:JSON.parse(localStorage.getItem('userData')).address,
        userName:JSON.parse(localStorage.getItem('userData')).userName,
        body:obj
    }
 })
   
 
}
   
   const clickSummaryHandler=()=>{
    setSummary();
    orderPosting()

   } 
   
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
              <td><button className="createOrdermiddlePartButton" onClick={()=>{clickSummaryHandler()}}>Proceed</button>
        <button className="createOrdermiddlePartButton" onClick={cancelClickHandler}>Cancel</button></td>
              </tr>
              
            </tfoot>

        </table> 
    </section>
  </section>
  
  <Footer/>
  {summaryDisplay&&<ViewSummary CreateOrder={true} exitHandler={setSummaryDisplay} mainData={postData} />}
        </>
    )
}
export default CreateOrder;