import React from "react"; 

const Footer =()=>{

    const currYear = new Date().getFullYear();
    // console.log(currYear);
    return(
        <>
            <footer className="footer">
                <p className="copy">Copyrights © {currYear} : www.rahul.technology.com</p>
            </footer>
        </>
    )
}
export default Footer;