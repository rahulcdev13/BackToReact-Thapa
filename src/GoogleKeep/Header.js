import React from "react"; 
import Logo from "./images/myLogo.png"; 

const Header =()=>{
    return(
        <><br />
            <div className="header">
                <img src={Logo} className="logo" alt="Logo" />
                <h1>Rahul Keep</h1>
            </div>
        </>
    )
}
export default Header;