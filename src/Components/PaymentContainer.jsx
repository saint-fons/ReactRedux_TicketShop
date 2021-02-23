import React from 'react'
import {compose} from "redux";
import connect from "react-redux/lib/connect/connect";
import "./../Style/style.css"
import {getRoutesSuperSelector, getWayBackSuperSelector} from "../Redux/Ticket-selector";
import Payment from "./Payment";



class PaymentContainer extends React.Component {


    render() {
        return <div>
            <Payment
                address={this.props.address}
                getRoutesSuperSelector={this.props.getRoutesSuperSelector}
                getWayBackSuperSelector={this.props.getWayBackSuperSelector}
                country={this.props.country}
                city={this.props.city}
                provider={this.props.provider}
                timezone={this.props.timezone}
                cityToVisit={this.props.cityToVisit}
                timeToVisit={this.props.timeToVisit}
                numberOfTickets={this.props.numberOfTickets}
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
        numberOfTickets: state.TicketPage.datePicked.numberOfTickets,
        getRoutesSuperSelector: getRoutesSuperSelector(state),
        getWayBackSuperSelector: getWayBackSuperSelector(state)
    }
}

export default compose(connect(mapStateToProps, { }))
(PaymentContainer)
