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
    }
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
