import React from 'react'
import NewForm from "./Forms/NewForm";
import Map from "./Map/Map";
import "./../Style/style.css"
import ShopMetaData from "./ShopMetaData";
import NevaTripLogo from "./../Style/nevatrip_logo.png"

const Shop = (props) => {

    return (
        <div className={"container"}>
            <div className={"container__header"}>
                <div className={"container__address"}>
                    <img className={"NevaTripLogo"} src={NevaTripLogo} alt={"NevaTripLogo"} />
                </div>
                <NewForm getAddress={props.getAddress}
                         updateAddress={props.updateAddress}
                         remoteIP={props.remoteIP}
                />

                <div>
                    <ShopMetaData
                        address={props.address}
                        isp={props.isp}
                        country={props.country}
                        city={props.city}
                        provider={props.provider}
                        timezone={props.timezone}
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
