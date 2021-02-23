import {createSelector} from "reselect";


export const getRoutesSelector = (state) => {
    return (state)
}

export const getRoutesSuperSelector = createSelector(
    getRoutesSelector,
    (state) => {
        if (state.TicketPage.datePicked.cityToVisit == "") {
            return state.TicketPage.travelRoutes.trace1
        }
        if (state.TicketPage.datePicked.cityToVisit == "A") {
            return state.TicketPage.travelRoutes.trace2
        }
        if (state.TicketPage.datePicked.cityToVisit == "B") {
            return state.TicketPage.travelRoutes.trace3
        }
    }
)

export const getWayBackSuperSelector = createSelector(
    getRoutesSelector,
    (state) => {
        if (state.TicketPage.datePicked.returnVisit == false) {
            return state.TicketPage.travelRoutes.trace4
        }
        if (state.TicketPage.datePicked.returnVisit == true) {
            if(state.TicketPage.datePicked.cityToVisit == "A"){
                return state.TicketPage.travelRoutes.trace3.filter (t =>
                    t.toLocaleString() > state.TicketPage.datePicked.timeToVisit)
            }
            if(state.TicketPage.datePicked.cityToVisit == "B"){
                return state.TicketPage.travelRoutes.trace2.filter (t =>
                    t.toLocaleString() > state.TicketPage.datePicked.timeToVisit)
            }
        }
    }
)
