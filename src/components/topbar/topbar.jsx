import "./topbar.css";
const TopBar=()=>{
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
                    <img src="images/profile.jpeg" className="topbarProfilePhoto" alt="ProfilePicture"/><span style={{color:"white"}}>userName</span>
                    <button id="topbarRightListLogoutButton">Logout</button>
                        </div></li>
                </ul>
            </section>
        </nav>
        </>
    )
}
export default TopBar