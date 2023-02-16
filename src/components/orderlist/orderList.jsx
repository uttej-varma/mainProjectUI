import Footer from "../footer/footer";
import SideBar from "../sidebar/sidebar";
import TopBar from "../topbar/topbar";
import "./orderlist.css";
import {orders} from "../../dummyOrderList";
import {Visibility} from "@mui/icons-material";
import ViewSummary from "../orderlistsummary/viewsummary";
import {useState} from "react";
import axios from "axios";

const OrderList=()=>{
    const [summary,setSummary]=useState(false);
    const url=`http://localhost:3400/api/v1/user/order?userId=${JSON.parse(localStorage.getItem('userData')).id}`;
    axios.get(url).then((response)=>{console.log(response.data.userOrders)}).catch((err)=>{console.log(err)});
    return(
       <>
        <TopBar/>
        <div className="orderlistMiddlepart">
        <SideBar/>
        <section className="orderlistTableContainer">
            <table className="orderlistTable">
                <thead className="orderlistTableHeader">
                 <tr className="orderlistTableHeaderRow">
                    <th>OrderId</th>
                    <th>OrderDate&Time</th>
                    <th>StoreLocation</th>
                    <th className="headerPadding">City</th>
                    <th>StorePhone</th>
                    <th>TotalItems</th>
                    <th className="headerPadding">Price</th>
                    <th className="headerPadding">status</th>
                    <th>view</th>
                 </tr>
                </thead>
                <tbody >
                    
                    {
                        orders.map((value,index)=>{
                            return(
                                <tr key={index}>
                                   <td>{value.orderId}</td>
                                   <td>{value.orderDate_time}</td>
                                   <td>{value.storeLocation}</td>
                                   <td>{value.city}</td>
                                   <td>{value.storePhone}</td>
                                   <td>{value.totalItems}</td>
                                   <td>{value.price}</td>
                                   <td>{value.status}</td>
                                   <td><Visibility className="orderlistSummaryViewIcon" onClick={()=>{setSummary(true)}}/></td>
                                </tr>
                            )
                        })
                    }
                    
                    
                </tbody>

            </table>

        </section>
        </div>
       {summary &&  <ViewSummary setter={setSummary}/>}
        
        <Footer/>
       </>
    )
}
export default OrderList