import {createSelector} from "reselect";


export const getRoutesSelector = (state) => {
    return (state)
}

export const getRoutesSuperSelector = createSelector(
    getRoutesSelector,
    (state) => {
        if (state.TicketPage.datePicked.cityToVisit == "A") {
            return state.TicketPage.travelRoutes.trace1
        }
        if (state.TicketPage.datePicked.cityToVisit == "B") {
            return state.TicketPage.travelRoutes.trace2
        }
    }
)
