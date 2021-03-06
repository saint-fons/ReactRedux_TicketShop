import {locationInfoAPI} from "../API/API";


const SET_ADDRESS = 'SET-ADDRESS';
const CITY_TO_VISIT = 'CITY-TO-VISIT';
const NUMBER_OF_TICKETS = 'NUMBER-OF-TICKETS';
const TIME_TO_VISIT = 'TIME-TO-VISIT';
const TIME_TO_WAY_BACK = 'TIME-TO-WAY_BACK';
const RETURN_VISIT = 'RETURN_VISIT';


let initialState = {
    location: {
        country: '',
        region: '',
        city: '',
        lat: 0,
        lng: 0,
        postalCode: '',
        timezone: '',
        geonameId: null
    },
    as: {
        asn: null,
        name: '',
        route: '',
        domain: '',
        type: ''
    },
    isp: '',
    proxy: {
        proxy: null,
        vpn: null,
        tor: null
    },
    travelRoutes: {
        trace1: [
            "Your route not selected"
        ],
        trace2: [
            new Date("01.08.2021 18:30"),
            new Date("01.08.2021 19:00"),
            new Date("01.08.2021 19:10"),
            new Date("01.08.2021 19:30"),
            new Date("01.08.2021 19:55"),
            new Date("01.08.2021 20:05"),
            new Date("01.08.2021 20:10"),
            new Date("01.08.2021 20:30"),
            new Date("01.08.2021 20:50"),
            new Date("01.08.2021 21:20"),
            new Date("01.08.2021 22:20"),
            new Date("01.08.2021 22:40"),
            new Date("01.08.2021 23:50")
        ],
        trace3: [
            new Date("01.08.2021 18:05"),
            new Date("01.08.2021 18:20"),
            new Date("01.08.2021 18:45"),
            new Date("01.08.2021 19:00"),
            new Date("01.08.2021 19:30"),
            new Date("01.08.2021 19:50"),
            new Date("01.08.2021 20:00"),
            new Date("01.08.2021 20:20"),
            new Date("01.08.2021 21:20"),
            new Date("01.08.2021 22:20"),
            new Date("01.08.2021 22:40"),
            new Date("01.08.2021 23:50")
        ],
        trace4: [
            "Way back not selected"
        ],

    },
    datePicked: {
        cityToVisit: "",
        numberOfTickets: "",
        timeToVisit: null,
        returnVisit: false,
        timeToWayBack: null
    }
}


const ticketReducer = (
    state = initialState,
    action) => {
    let stateCopy

    switch (action.type) {
        case SET_ADDRESS: {
            return {
                ...state,
                ...action.data
            }
        }
        case CITY_TO_VISIT: {
            stateCopy = {...state}
            stateCopy.datePicked.cityToVisit = action.newCity
            return stateCopy
        }

        case NUMBER_OF_TICKETS: {
            stateCopy = {...state}
            stateCopy.datePicked.numberOfTickets = action.number
            return stateCopy
        }

        case TIME_TO_VISIT: {
            stateCopy = {...state}
            stateCopy.datePicked.timeToVisit = action.text
            return stateCopy
        }

        case TIME_TO_WAY_BACK: {
            stateCopy = {...state}
            stateCopy.datePicked.timeToWayBack = action.newTime
            return stateCopy
        }


        case RETURN_VISIT: {
            stateCopy = {...state}
            stateCopy.datePicked.returnVisit = action.text
            return stateCopy
        }
        default:
            return state
    }
}


export const setAddress = (ip, location, as, isp, proxy) =>
    ({type: SET_ADDRESS, data: {ip, location, as, isp, proxy}})

export const updateCityToVisitAC = (text) =>
    ({type: CITY_TO_VISIT, newCity: text})

export const updateNumberOfTicketsAC = (text) =>
    ({type: NUMBER_OF_TICKETS, number: text})


export const updateTimeToVisitAC = (text) =>
    ({type: TIME_TO_VISIT, text})

export const updateTimeToWayBackAC = (text) =>
    ({type: TIME_TO_WAY_BACK, newTime: text})



export const updateReturnVisitAC = (text) =>
    ({type: RETURN_VISIT, text})


export const getAddress = () => { /*ThunkCreator*/
    return (dispatch) => {
        locationInfoAPI.getAddress()
            .then(data => {
                let {ip, location, as, isp, proxy} = data.data
                dispatch(setAddress(ip, location, as, isp, proxy))
            })
    }
}

export default ticketReducer
