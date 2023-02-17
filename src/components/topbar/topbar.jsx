import "./topbar.css";
import { useContext } from "react";
// import CreateContext from "../orderSummaryContext/createContext";
import { useNavigate } from "react-router-dom";
const TopBar=()=>{
    const navigate=useNavigate();
    // const userNameHandling=useContext(CreateContext);
    const logOutHandler=()=>{
        localStorage.removeItem("userData");
        navigate("/login");
    }
    return(
        <>
        <nav id="navbarContainer">
            <section>
                <h2 className="topbarLogo">LAUNDARY</h2>
            </section>
            <section className="topbarLeftSection" >
                <ul id="topbarRightListContainer">
                    <li>pricing</li>
                    <li>career</li>
                    <li className="topbarRightListbackground"><div className="topbarRightlistUserNameContainer">
                    <img src="images/profile.jpeg" className="topbarProfilePhoto" alt="ProfilePicture"/><span style={{color:"white"}}>{JSON.parse(localStorage.getItem("userData")).userName}</span>
                    <button id="topbarRightListLogoutButton" onClick={logOutHandler}>Logout</button>
                        </div></li>
                </ul>
            </section>
        </nav>
        </>
    )
}
export default TopBar