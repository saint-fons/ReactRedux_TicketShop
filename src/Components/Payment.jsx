import React from "react"
import "./../Style/style.css"
import {NavLink} from "react-router-dom";


const Payment = (props) => {
    return(
        <div className={"payment"}>
            <NavLink to={'/'}
            >
                Back
            </NavLink>

            <div>
                hi
            </div>
        </div>
    )
}


export default Payment
