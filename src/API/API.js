import axios from 'axios';


export const locationInfoAPI = {
    getAddress() {
        return axios.get(`https://geo.ipify.org/api/v1?apiKey=at_vVCAR5mM9BDdzdl8OP8CDH4B4PxQe&ipAddress=`)
            .then(response =>{
                return response
            })
    }
}
