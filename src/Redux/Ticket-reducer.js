import {locationInfoAPI} from "../API/API";


const SET_ADDRESS = 'SET-ADDRESS';
const CITY_TO_VISIT = 'CITY-TO-VISIT';
const TIME_TO_VISIT = 'TIME-TO-VISIT';
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
            "2021-08-21 18:00:00",
            "2021-08-21 18:30:00",
            "2021-08-21 18:45:00",
            "2021-08-21 19:00:00",
            "2021-08-21 19:15:00",
            "2021-08-21 21:00:00"
        ],
        trace2: [
            "2021-08-21 18:30:00",
            "2021-08-21 18:45:00",
            "2021-08-21 19:00:00",
            "2021-08-21 19:15:00",
            "2021-08-21 19:35:00",
            "2021-08-21 21:50:00",
            "2021-08-21 21:55:00"
        ]
    },
    datePicked: {
        cityToVisit: "A",
        timeToVisit: "",
        returnVisit: false
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
        case TIME_TO_VISIT: {
            stateCopy = {...state}
            stateCopy.datePicked.timeToVisit = action.newTime
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

export const updateTimeToVisitAC = (text) =>
    ({type: TIME_TO_VISIT, newTime: text})

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
