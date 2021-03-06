import React from 'react'
import NewForm from "./Forms/NewForm";
import Map from "./Map/Map";
import "./../Style/style.css"
import ShopMetaData from "./ShopMetaData";

const Shop = (props) => {

    return (
        <div className={"container"}>
            <div className={"container__header"}>
                <NewForm
                    updateCityToVisitAC={props.updateCityToVisitAC}
                    updateTimeToVisitAC={props.updateTimeToVisitAC}
                    updateTimeToWayBackAC={props.updateTimeToWayBackAC}
                    updateReturnVisitAC={props.updateReturnVisitAC}
                    updateNumberOfTicketsAC={props.updateNumberOfTicketsAC}
                    getRoutesSuperSelector={props.getRoutesSuperSelector}
                    getWayBackSuperSelector={props.getWayBackSuperSelector}
                    picketCitySuperSelector={props.picketCitySuperSelector}
                    picketTimeSuperSelector={props.picketTimeSuperSelector}
                    picketTimeWayBackSuperSelector={props.picketTimeWayBackSuperSelector}
                    picketNumberOfTicketsSuperSelector={props.picketNumberOfTicketsSuperSelector}
                    getTimeToWayBackSuperSelector={props.getTimeToWayBackSuperSelector}
                    time={props.time}
                    cityToVisit={props.cityToVisit}
                    timeToVisit={props.timeToVisit}
                />

                <div>
                    <ShopMetaData
                        address={props.address}
                        isp={props.isp}
                        country={props.country}
                        city={props.city}
                        provider={props.provider}
                        timezone={props.timezone}
                        cityToVisit={props.cityToVisit}
                    />
                </div>
            </div>
            <div className={"bottom"}>
                <Map/>
            </div>
        </div>
    )
}


export default Shop
