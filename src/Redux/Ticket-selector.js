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


let newTime = new Date()

export const getWayBackSuperSelector = createSelector(
    getRoutesSelector,
    (state) => {
        if (state.TicketPage.datePicked.returnVisit == false) {
            return state.TicketPage.travelRoutes.trace4
        }
        if (state.TicketPage.datePicked.returnVisit == true) {
            if(state.TicketPage.datePicked.cityToVisit == "A"){
                return state.TicketPage.travelRoutes.trace3.filter (t =>
                    (t.toLocaleString() > state.TicketPage.datePicked.timeToVisit))
            }
            if(state.TicketPage.datePicked.cityToVisit == "B"){
                return state.TicketPage.travelRoutes.trace2.filter (t =>
                    (t.toLocaleString() > state.TicketPage.datePicked.timeToVisit))
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

let journey = "Your journey starts at (MSK, SPB) "

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


let numberOfTickets = "You are purchasing tickets: "
let oneWayPrise = ". The total price will be "
let priceWithoutWayBack = 700
let priceWithWayBack = 1200

export const picketNumberOfTicketsSuperSelector = createSelector(
    getRoutesSelector,
    (state) => {
        if (state.TicketPage.datePicked.numberOfTickets == "") {
            return ""
        }
        //Если выбраны билеты, смотрим выбран ли путь назад
        if (state.TicketPage.datePicked.numberOfTickets != "") {
            if(state.TicketPage.datePicked.timeToWayBack == null) {
                return (numberOfTickets + state.TicketPage.datePicked.numberOfTickets + oneWayPrise + (priceWithoutWayBack * state.TicketPage.datePicked.numberOfTickets))
            }
            if(state.TicketPage.datePicked.timeToWayBack != null) {
                return (numberOfTickets + state.TicketPage.datePicked.numberOfTickets + oneWayPrise + (priceWithWayBack * state.TicketPage.datePicked.numberOfTickets))
            }
        }
}
)






