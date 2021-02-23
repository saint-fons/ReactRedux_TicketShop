import React from "react"
import {withRouter} from "react-router";
import {Route} from "react-router-dom";
import ShopContainer from "../ShopContainer";
import {compose} from "redux";
import PaymentContainer from "../PaymentContainer";


const ReactTicketRouter = () => {
    return(
        <div>
            <div>
                <Route exact path='/' render={() =>
                    <ShopContainer />}/>

                <Route path='/payment' render={() =>
                    <PaymentContainer
                    />}/>
            </div>
        </div>
    )
}

export default compose(withRouter)(ReactTicketRouter)
