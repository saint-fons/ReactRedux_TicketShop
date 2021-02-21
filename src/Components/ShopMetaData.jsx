import React from "react"
import "./../Style/style.css"

const ShopMetaData = (props) => {
    return (
        <div className={"container__header__data"}>
            <div className={"container__header__data__element"}>
                <div className={"container__header__data__element__header"}>
                    Your city to visit
                </div>
                <div className={"container__header__data__element__bottom"}>
                    Russia, Saint-Petersburg
                </div>
            </div>
            <div className={"container__header__data__element"}>
                <div className={"container__header__data__element__header"}>
                    Your current city
                </div>
                <div className={"container__header__data__element__bottom"}>
                    {props.country}, {props.city}
                </div>
            </div>

            <div className={"container__header__data__element"}>
                <div className={"container__header__data__element__header"}>
                    Current time zone
                </div>
                <div className={"container__header__data__element__bottom"}>
                    {props.timezone}
                </div>
            </div>

            <div className={"container__header__data__element"}>
                <div className={"container__header__data__element__header"}>
                    Time zone in MSK, SPB
                </div>
                <div className={"container__header__data__element__bottom"}>
                    +03:00
                </div>
            </div>


        </div>
    )
}

export default ShopMetaData
