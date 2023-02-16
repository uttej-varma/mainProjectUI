import {Close} from "@mui/icons-material";
import CreateSummaryBody from "../createOrderSummarryBody/createSummaryBody";
import "./viewsummary.css";
import CreateContext from "../orderSummaryContext/createContext";
import { useContext } from "react";
import Swal from 'sweetalert2'
// import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ViewSummary=(props)=>{
    const navigate=useNavigate();
    const summaryHandling=useContext(CreateContext);
    // const [postData,setPostData]=useState({
    //     location:"",
    //     city:"",
    //     totalItems:0,
    //     totalPrice:0,
    //     summary:{
    //         address:"",
    //         body:{},
    //         userName:"",
    //     }
    // });
    // const orderPosting=()=>{
    //     let totalQuantity=0;
    //     let totalCost=0;
    //     let obj={};
    //     if(summaryHandling.dynamic.shirts.isValidShirts===true)
    //     {totalQuantity+=summaryHandling.dynamic.shirts.quantity;
    //         totalCost+=summaryHandling.dynamic.shirts.totalCost;
    //         obj={...obj,shirts:{type:"Shirts",
    //         service:[summaryHandling.dynamic.shirts.washing.type,summaryHandling.dynamic.shirts.iron.type,summaryHandling.dynamic.shirts.drywash.type,summaryHandling.dynamic.shirts.chemicalwash.type]}}
    //     }
    //     if(summaryHandling.dynamic.tShirts.isValidTShirts===true){totalQuantity+=summaryHandling.dynamic.tShirts.quantity;
    //         totalCost+=summaryHandling.dynamic.tShirts.totalCost;
    //         obj={...obj,tShirts:{type:"Shirts",
    //         service:[summaryHandling.dynamic.tShirts.washing.type,summaryHandling.dynamic.tShirts.iron.type,summaryHandling.dynamic.tShirts.drywash.type,summaryHandling.dynamic.tShirts.chemicalwash.type]}}
    //     }
    //     if(summaryHandling.dynamic.trousers.isValidTrousers===true){totalQuantity+=summaryHandling.dynamic.trousers.quantity;
    //         totalCost+=summaryHandling.dynamic.trousers.totalCost;
    //         obj={...obj,trousers:{type:"Shirts",
    //         service:[summaryHandling.dynamic.trousers.washing.type,summaryHandling.dynamic.trousers.iron.type,summaryHandling.dynamic.trousers.drywash.type,summaryHandling.dynamic.trousers.chemicalwash.type]}}
    //     }
    //     if(summaryHandling.dynamic.jeans.isValidJeans===true){totalQuantity+=summaryHandling.dynamic.jeans.quantity;
    //         totalCost+=summaryHandling.dynamic.jeans.totalCost;
    //         obj={...obj,jeans:{type:"Shirts",
    //         service:[summaryHandling.dynamic.jeans.washing.type,summaryHandling.dynamic.jeans.iron.type,summaryHandling.dynamic.jeans.drywash.type,summaryHandling.dynamic.jeans.chemicalwash.type]}}
    //     }
    //     if(summaryHandling.dynamic.boxers.isValidBoxers===true){totalQuantity+=summaryHandling.dynamic.boxers.quantity;
    //         totalCost+=summaryHandling.dynamic.boxers.totalCost;
    //         obj={...obj,boxers:{type:"Shirts",
    //         service:[summaryHandling.dynamic.boxers.washing.type,summaryHandling.dynamic.boxers.iron.type,summaryHandling.dynamic.boxers.drywash.type,summaryHandling.dynamic.boxers.chemicalwash.type]}}
    //     }
    //     if(summaryHandling.dynamic.joggers.isValidJoggers===true){totalQuantity+=summaryHandling.dynamic.joggers.quantity;
    //         totalCost+=summaryHandling.dynamic.joggers.totalCost;
    //         obj={...obj,joggers:{type:"Shirts",
    //         service:[summaryHandling.dynamic.joggers.washing.type,summaryHandling.dynamic.joggers.iron.type,summaryHandling.dynamic.joggers.drywash.type,summaryHandling.dynamic.joggers.chemicalwash.type]}}
    //     }
    //     if(summaryHandling.dynamic.others.isValidOthers===true){totalQuantity+=summaryHandling.dynamic.others.quantity;
    //         totalCost+=summaryHandling.dynamic.others.totalCost;
    //         obj={...obj,others:{type:"Shirts",
    //         service:[summaryHandling.dynamic.others.washing.type,summaryHandling.dynamic.others.iron.type,summaryHandling.dynamic.others.drywash.type,summaryHandling.dynamic.others.chemicalwash.type]}}
    //     }

    //     setPostData({...postData,
    //     location:JSON.parse(localStorage.getItem('userData')).location,
    //     city:JSON.parse(localStorage.getItem('userData')).location,
    //     totalItems:totalQuantity,
    //     totalPrice:totalCost,
    //     summary:{...postData.summary.body,
    //         address:JSON.parse(localStorage.getItem('userData')).address,
    //         userName:JSON.parse(localStorage.getItem('userData')).userName,
    //         body:obj
    //     }
    //  })
       
     
    // }
    const check=async()=>{
        await axios.post("http://localhost:3400/api/v1/user/order",{
            ...props.mainData
         },{
            headers:{'jwttoken':JSON.parse(localStorage.getItem('userData')).token},
            'Content-Type': 'application/json'
           
          }).then((response)=>{
            if(response.data.message==="order placed successfully")
            {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'OrderPlacedSuccessfully',
                    showConfirmButton: true,
                    confirmButtonText: 'Go to Orders',
                    // timer: 1500
                  }).then((willNavigate)=>{
                    if(willNavigate){
                        navigate("/userOrderList");
                    }
                  })
                 
            }
          }).catch((err)=>{
            if(err.response.data.message==="please login again" || err.response.data.message==="user not authenticated")
            {
                summaryHandling.setDynamic(
                    {
                        shirts:{washing:{isValid:false,costPerUnit:0,type:""},
                        iron:{isValid:false,costPerUnit:0,type:""},
                        drywash:{isValid:false,costPerUnit:0,type:""},
                        chemicalwash:{isValid:false,costPerUnit:0,type:""},
                        isValidShirts:false,
                        quantity:0,
                        totalCost:0
                        
                         },tShirts:{washing:{isValid:false,costPerUnit:0,type:""},
                         iron:{isValid:false,costPerUnit:0,type:""},
                         drywash:{isValid:false,costPerUnit:0,type:""},
                         chemicalwash:{isValid:false,costPerUnit:0,type:""},
                         isValidTShirts:false,
                         quantity:0,
                         totalCost:0
                       
                          },
                          trousers:{washing:{isValid:false,costPerUnit:0,type:""},
                         iron:{isValid:false,costPerUnit:0,type:""},
                         drywash:{isValid:false,costPerUnit:0,type:""},
                         chemicalwash:{isValid:false,costPerUnit:0,type:""},
                         isValidTrousers:false,
                         quantity:0,
                         totalCost:0
                       
                          },
                          jeans:{washing:{isValid:false,costPerUnit:0,type:""},
                         iron:{isValid:false,costPerUnit:0,type:""},
                         drywash:{isValid:false,costPerUnit:0,type:""},
                         chemicalwash:{isValid:false,costPerUnit:0,type:""},
                         isValidJeans:false,
                         quantity:0,
                         totalCost:0
                       
                          },
                          boxers:{washing:{isValid:false,costPerUnit:0,type:""},
                         iron:{isValid:false,costPerUnit:0,type:""},
                         drywash:{isValid:false,costPerUnit:0,type:""},
                         chemicalwash:{isValid:false,costPerUnit:0,type:""},
                         isValidBoxers:false,
                         quantity:0,
                         totalCost:0
                       
                          },
                          joggers:{washing:{isValid:false,costPerUnit:0,type:""},
                         iron:{isValid:false,costPerUnit:0,type:""},
                         drywash:{isValid:false,costPerUnit:0,type:""},
                         chemicalwash:{isValid:false,costPerUnit:0,type:""},
                         isValidJoggers:false,
                         quantity:0,
                         totalCost:0
                       
                          },
                          others:{washing:{isValid:false,costPerUnit:0,type:""},
                          iron:{isValid:false,costPerUnit:0,type:""},
                          drywash:{isValid:false,costPerUnit:0,type:""},
                          chemicalwash:{isValid:false,costPerUnit:0,type:""},
                          isValidOthers:false,
                          quantity:0,
                          totalCost:0
                        
                           },
                           userFrontend:{
                            userName:"",
                            address:"",
                            location:""
                           }
                           
                          
                
                      }
                )
                navigate("/login")
            }
          });
          

        
    }
    // const check=()=>{
    //     console.log(props.mainData)
    // }
   const OrderListSummary=()=>{
    return(
        <>
        <section className="viewSummaryMainContainer">
            <section className="viewSummarytopPart">
               <h3>Summary</h3>
               <Close onClick={()=>{props.setter(false)}}/>
            </section>
            <section className="viewSummarytopinfoPart">
                <section>
                    <h4>StoreLocation:</h4>
                    <p>jp nagar</p>
                </section>
                <section>
                    <h4>StoreAddress:</h4>
                    <p>near phonebooth,100ft ringroad</p>
                </section>
                <section>
                    <h4>Phone:</h4>
                    <p>9999999999</p>
                </section>
            </section>
            <section className="viewSummarymiddlePart">
                <h4>Order Details</h4>
                <table className="viewSummarymiddlePartTable">
                    <tbody>
                        <tr>
                            <td>Shirts</td>
                            <td>Washing,ironing</td>
                            <td>5*20</td>
                            <td><b>100</b></td>
                        </tr>
                        <tr>
                            <td>T-Shirts</td>
                            <td>Washing,ironing</td>
                            <td>5*20</td>
                            <td><b>100</b></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Sub Total:</td>
                            <td><b>200</b></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>PickUp charge:</td>
                            <td><b>90</b></td>
                        </tr>
                        <tr className="summaryTableFooterTotal">
                            <td></td>
                            <td></td>
                            <td>Total:</td>
                            <td><b>RS 290</b></td>
                        </tr>
                    </tfoot>
                </table>
            </section>
            <section className="viewSummaryBottomPart">
                <h4>Address</h4>
                <article className="summaryBottomAddressBox">
                    <h4>Home</h4>
                    <p>rando,1-132,vzm</p>
                </article>
            </section>
        </section>
        </>
    )
   }
   const CreateOrderSummary=()=>{
    
    
    // console.log(summaryHandling.dynamic.address);
    return(
        <>
        <section className="viewSummaryMainContainer">
            <section className="viewSummarytopPart">
               <h3>Summary</h3>
               <Close onClick={()=>{props.exitHandler(false)}}/>
            </section>
            <section className="viewSummarytopinfoPart">
                <section>
                    <h4>StoreLocation:</h4>
                    <p>{summaryHandling.dynamic.userFrontend.location}</p>
                </section>
                <section>
                    <h4>StoreAddress:</h4>
                    <p>near phonebooth,100ft ringroad</p>
                </section>
                <section>
                    <h4>Phone:</h4>
                    <p>9999999999</p>
                </section>
            </section>
            <section className="viewSummarymiddlePart">
                <h4>Order Details</h4>
                <table className="viewSummarymiddlePartTable">
                    <tbody>
                        
                   <CreateSummaryBody/>
                        
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Sub Total:</td>
                            <td><b>{(summaryHandling.dynamic.shirts.totalCost*summaryHandling.dynamic.shirts.quantity)+(summaryHandling.dynamic.tShirts.totalCost*summaryHandling.dynamic.tShirts.quantity)
                                   +(summaryHandling.dynamic.trousers.totalCost*summaryHandling.dynamic.trousers.quantity)+(summaryHandling.dynamic.jeans.totalCost*summaryHandling.dynamic.jeans.quantity)
                                   +(summaryHandling.dynamic.boxers.totalCost*summaryHandling.dynamic.boxers.quantity)+(summaryHandling.dynamic.joggers.totalCost*summaryHandling.dynamic.joggers.quantity)
                                   +(summaryHandling.dynamic.others.totalCost*summaryHandling.dynamic.others.quantity)
                                    }</b></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>PickUp charge:</td>
                            <td><b>90</b></td>
                        </tr>
                        <tr className="summaryTableFooterTotal">
                            <td></td>
                            <td></td>
                            <td>Total:</td>
                            <td><b>{(summaryHandling.dynamic.shirts.totalCost*summaryHandling.dynamic.shirts.quantity)+(summaryHandling.dynamic.tShirts.totalCost*summaryHandling.dynamic.tShirts.quantity)
                                   +(summaryHandling.dynamic.trousers.totalCost*summaryHandling.dynamic.trousers.quantity)+(summaryHandling.dynamic.jeans.totalCost*summaryHandling.dynamic.jeans.quantity)
                                   +(summaryHandling.dynamic.boxers.totalCost*summaryHandling.dynamic.boxers.quantity)+(summaryHandling.dynamic.joggers.totalCost*summaryHandling.dynamic.joggers.quantity)
                                   +(summaryHandling.dynamic.others.totalCost*summaryHandling.dynamic.others.quantity)+90}</b></td>
                        </tr>
                    </tfoot>
                </table>
            </section>
            <section className="viewSummaryBottomPart">
                <h4>Address</h4>
                <article className="summaryBottomAddressBox">
                    <h4>Home</h4>
                    <p>{summaryHandling.dynamic.userFrontend.address}</p>
                </article>
            </section>
            <article>
                    <button className="confirmButton" onClick={check}>Confirm</button>
                </article>
        </section>
        </>
    ) 

   }
   return(
    <>
    {props.CreateOrder?<CreateOrderSummary/>:<OrderListSummary/>}
    </>
   )
}
export default ViewSummary;