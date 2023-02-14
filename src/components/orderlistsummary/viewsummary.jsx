import {Close} from "@mui/icons-material";
import "./viewsummary.css";
const ViewSummary=(props)=>{
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
                    <p>3-130,AsrNagar-I,vizianagaram</p>
                </article>
            </section>
        </section>
        </>
    )
   }
   const CreateOrderSummary=()=>{
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
                    <p>3-130,AsrNagar-I,vizianagaram</p>
                </article>
            </section>
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