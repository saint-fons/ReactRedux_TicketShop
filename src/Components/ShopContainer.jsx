import React from 'react'
import {compose} from "redux";
import {getAddress, updateCityToVisitAC, updateReturnVisitAC, updateTimeToVisitAC} from "./../Redux/Ticket-reducer";
import Shop from "./Shop";
import connect from "react-redux/lib/connect/connect";
import "./../Style/style.css"
import {getRoutesSuperSelector} from "../Redux/Ticket-selector";



class ShopContainer extends React.Component {

    componentDidMount() {
        this.props.getAddress()
    }

    render() {
        return <div>
            <Shop
                address={this.props.address}
                updateCityToVisitAC={this.props.updateCityToVisitAC}
                updateTimeToVisitAC={this.props.updateTimeToVisitAC}
                updateReturnVisitAC={this.props.updateReturnVisitAC}
                country={this.props.country}
                city={this.props.city}
                provider={this.props.provider}
                timezone={this.props.timezone}
                cityToVisit={this.props.cityToVisit}
                getRoutesSuperSelector={this.props.getRoutesSuperSelector}
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
        timezone: state.TicketPage.location.timezone,
        cityToVisit: state.TicketPage.datePicked.cityToVisit,
        getRoutesSuperSelector: getRoutesSuperSelector(state)
    }
}

export default compose(connect(mapStateToProps, {
    getAddress,
    updateCityToVisitAC,
    updateTimeToVisitAC,
    updateReturnVisitAC
}))
(ShopContainer)
