import React from 'react'
import { LocationModel } from '../../model/locationModel'
import { LocationWrapper, LocDescription, LocMisc, LocTitle } from './locationCardComponent.styled'

import { ReactComponent as SVGLocation } from '../../assets/svg/place.svg'
import { ReactComponent as SVGCoin } from '../../assets/svg/coin.svg'

const LocationCardComponent = (props: LocationModel): JSX.Element => {
    return (
        <LocationWrapper>
            <figure><img src={props.img}/></figure>
            <LocTitle>{props.title}</LocTitle>
            <LocDescription>{props.description}</LocDescription>
            <LocMisc>
                <span>
                    <SVGLocation/>
                    {props.location[0]}, {props.location[1]} 
                </span>
                
                <span>
                    <SVGCoin/>
                    {props.price} <span> / person</span>
                </span>
            </LocMisc>
        </LocationWrapper>
    )
}

export default LocationCardComponent
