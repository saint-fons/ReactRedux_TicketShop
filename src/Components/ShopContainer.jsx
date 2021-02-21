import React from 'react'
import {compose} from "redux";
import {getAddress, updateCityToVisitAC} from "./../Redux/Ticket-reducer";
import Shop from "./Shop";
import connect from "react-redux/lib/connect/connect";
import "./../Style/style.css"



class ShopContainer extends React.Component {

    componentDidMount() {
        this.props.getAddress(this.props.remoteIP)
    }

    render() {
        return <div>
            <Shop
                address={this.props.address}
                updateCityToVisitAC={this.props.updateCityToVisitAC}
                country={this.props.country}
                city={this.props.city}
                provider={this.props.provider}
                timezone={this.props.timezone}
            />
        </div>
    }
}


let mapStateToProps = (state) => {
    return {
        address: state.TicketPage.ip,
        provider: state.TicketPage.as.name,
        country: state.TicketPage.location.country,
        city: state.TicketPage.location.region,
        lat: state.TicketPage.location.lat,
        lng: state.TicketPage.location.lng,
        timezone: state.TicketPage.location.timezone
    }
}

export default compose(connect(mapStateToProps, {getAddress, updateCityToVisitAC}))
(ShopContainer)
