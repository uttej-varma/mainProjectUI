import Footer from "../footer/footer";
import SideBar from "../sidebar/sidebar";
import TopBar from "../topbar/topbar";
import "./orderlist.css";
// import {orders} from "../../dummyOrderList";
import { useEffect } from "react";
import {Visibility} from "@mui/icons-material";
import ViewSummary from "../orderlistsummary/viewsummary";
import {useState} from "react";
import axios from "axios";

const OrderList=()=>{
    const [summary,setSummary]=useState([]);
    const arr=[];
    const [userOrderList,setUserOrderList]=useState([]);
    const url=`http://localhost:3400/api/v1/user/order?userId=${JSON.parse(localStorage.getItem('userData')).id}`;
     useEffect(()=>{
        axios.get(url).then((response)=>{
            setUserOrderList(response.data.userOrders);
            setSummary(new Array(response.data.userOrders.length).fill(false));
            // console.log(response.data);
            // console.log(userOrderList)
        }).catch((err)=>{console.log(err)});
     },[])
     const visibleSummaryHandler=(index)=>{
        summary[index]=true;
        setSummary([...summary]);
     }
    

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
                        userOrderList.reverse().map((value,index)=>{
                            arr[index]=value;
                            return(
                                <tr key={index}>
                                   <td>Ord:{value._id.split("")[18]}{value._id.split("")[19]}{value._id.split("")[20]}{value._id.split("")[21]}{value._id.split("")[22]}{value._id.split("")[23]}</td>
                                   <td>{value.createdAt.split("T")[0]}&{value.createdAt.split("T")[1].split(".")[0]}</td>
                                   <td>{value.location}</td>
                                   <td>{value.city}</td>
                                   <td>9999999999</td>
                                   <td className="paddingRight"><b>{value.totalItems}</b></td>
                                   <td className="paddingRight"><b>{value.totalPrice}</b></td>
                                   <td>staticvalue</td>
                                   <td><Visibility className="orderlistSummaryViewIcon" onClick={()=>{visibleSummaryHandler(index)}} /></td>
                                   {summary[index] && <td><ViewSummary setarray={setSummary} array={summary} index={index} mainArray={arr}/></td> }
                                </tr>
                            )
                        })
                    }
                    
                    
                </tbody>

            </table>

        </section>
        </div>
       {/* {summary &&  <ViewSummary setter={setSummary} value={arr}/>} */}
        
        <Footer/>
       </>
    )
}
export default OrderList