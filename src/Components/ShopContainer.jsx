import React from 'react'
import {compose} from "redux";
import {
    getAddress,
    updateCityToVisitAC, updateNumberOfTicketsAC,
    updateReturnVisitAC,
    updateTimeToVisitAC,
    updateTimeToWayBackAC
} from "./../Redux/Ticket-reducer";
import Shop from "./Shop";
import connect from "react-redux/lib/connect/connect";
import "./../Style/style.css"
import {
    getRoutesSuperSelector, getTimeToWayBackSuperSelector,
    getWayBackSuperSelector,
    picketCitySuperSelector, picketNumberOfTicketsSuperSelector,
    picketTimeSuperSelector,
    picketTimeWayBackSuperSelector
} from "../Redux/Ticket-selector";



class ShopContainer extends React.Component {

    componentDidMount() {
        //this.props.getAddress()
    }

    render() {
        return <div>
            <Shop
                address={this.props.address}
                updateCityToVisitAC={this.props.updateCityToVisitAC}
                updateTimeToVisitAC={this.props.updateTimeToVisitAC}
                updateTimeToWayBackAC={this.props.updateTimeToWayBackAC}
                updateReturnVisitAC={this.props.updateReturnVisitAC}
                updateNumberOfTicketsAC={this.props.updateNumberOfTicketsAC}
                getRoutesSuperSelector={this.props.getRoutesSuperSelector}
                getWayBackSuperSelector={this.props.getWayBackSuperSelector}
                picketCitySuperSelector={this.props.picketCitySuperSelector}
                picketTimeSuperSelector={this.props.picketTimeSuperSelector}
                picketTimeWayBackSuperSelector={this.props.picketTimeWayBackSuperSelector}
                picketNumberOfTicketsSuperSelector={this.props.picketNumberOfTicketsSuperSelector}
                getTimeToWayBackSuperSelector={this.props.getTimeToWayBackSuperSelector}
                country={this.props.country}
                city={this.props.city}
                provider={this.props.provider}
                timezone={this.props.timezone}
                cityToVisit={this.props.cityToVisit}
                timeToVisit={this.props.timeToVisit}
            />
        </div>
    }
}


let mapStateToProps = (state) => {
    return {
        timeToVisit: state.TicketPage.datePicked.timeToVisit,
        address: state.TicketPage.ip,
        provider: state.TicketPage.as.name,
        country: state.TicketPage.location.country,
        city: state.TicketPage.location.region,
        lat: state.TicketPage.location.lat,
        lng: state.TicketPage.location.lng,
        timezone: state.TicketPage.location.timezone,
        cityToVisit: state.TicketPage.datePicked.cityToVisit,
        getRoutesSuperSelector: getRoutesSuperSelector(state),
        getWayBackSuperSelector: getWayBackSuperSelector(state),
        picketCitySuperSelector: picketCitySuperSelector(state),
        picketTimeSuperSelector: picketTimeSuperSelector(state),
        picketTimeWayBackSuperSelector: picketTimeWayBackSuperSelector(state),
        picketNumberOfTicketsSuperSelector: picketNumberOfTicketsSuperSelector(state),
        getTimeToWayBackSuperSelector: getTimeToWayBackSuperSelector(state)
    }
}

export default compose(connect(mapStateToProps, {
    getAddress,
    updateCityToVisitAC,
    updateTimeToVisitAC,
    updateReturnVisitAC,
    updateTimeToWayBackAC,
    updateNumberOfTicketsAC
}))
(ShopContainer)
