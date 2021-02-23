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

export const picketCitySuperSelector = createSelector(
    getRoutesSelector,
    (state) => {
        if (state.TicketPage.datePicked.cityToVisit == "") {
            return ""
        }
        if (state.TicketPage.datePicked.cityToVisit == "A") {
            return ("Your journey begins to city A")
        }
        if (state.TicketPage.datePicked.cityToVisit == "B") {
            return ("Your journey begins to city B")
        }
}
)

let journey = "Your journey starts at "

export const picketTimeSuperSelector = createSelector(
    getRoutesSelector,
    (state) => {
        if (state.TicketPage.datePicked.timeToVisit == null) {
            return ""
        }
        if (state.TicketPage.datePicked.timeToVisit != null) {
            return (journey + state.TicketPage.datePicked.timeToVisit.toString())
        }
}
)

let wayBack = "You have chosen a return ticket to "

export const picketTimeWayBackSuperSelector = createSelector(
    getRoutesSelector,
    (state) => {
        if (state.TicketPage.datePicked.timeToWayBack == null) {
            return ""
        }
        if (state.TicketPage.datePicked.timeToVisit != null) {
            return (wayBack + state.TicketPage.datePicked.timeToWayBack.toString())
        }
}
)


let numberOfTickets = "You are purchasing tickets "

export const picketNumberOfTicketsSuperSelector = createSelector(
    getRoutesSelector,
    (state) => {
        if (state.TicketPage.datePicked.numberOfTickets == "") {
            return ""
        }
        if (state.TicketPage.datePicked.numberOfTickets != "") {
            return (numberOfTickets + state.TicketPage.datePicked.numberOfTickets)
        }
}
)






