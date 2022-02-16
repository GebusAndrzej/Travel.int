import React from 'react'
import { LocationModel } from '../../model/locationModel'
import LocationCardComponent from '../locationCard/LocationCardComponent'
import { LocationGrid } from './LocationGridComponent.styled'

interface Props {
  locations: LocationModel[]
}

const LocationGridComponent = ( props: Props ):JSX.Element => {
  return (
    <LocationGrid>
      {props.locations.map(loc => (
        <LocationCardComponent key={loc.title} {...loc}></LocationCardComponent>
      ))}
    </LocationGrid>
  )
}

export default LocationGridComponent