import {locationInfoAPI} from "../API/API";


const SET_ADDRESS = 'SET-ADDRESS';


let initialState = {
    ip: '',
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
    trace1: {
        location: "From A to B",
        time: ["2021-08-21 18:00:00", "2021-08-21 18:30:00", "2021-08-21 18:45:00", "2021-08-21 19:00:00", "2021-08-21 19:15:00", "2021-08-21 21:00:00"]

    },
    trace2: {
        location: "From B to A",
        time: ["2021-08-21 18:30:00", "2021-08-21 18:45:00", "2021-08-21 19:00:00", "2021-08-21 19:15:00", "2021-08-21 19:35:00", "2021-08-21 21:50:00", "2021-08-21 21:55:00"]
    },
    datePicked: ""
}


const ticketReducer = (state = initialState, action) => {
    let stateCopy

    switch (action.type) {
        case SET_ADDRESS: {
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state
    }
}


export const setAddress = (ip, location, as, isp, proxy) =>
    ({type: SET_ADDRESS, data: {ip, location, as, isp, proxy}})

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
