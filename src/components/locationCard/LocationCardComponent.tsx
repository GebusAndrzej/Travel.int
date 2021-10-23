import React from 'react'

interface Props {
    img: string,
    title: string,
    description: string,
    location: [string, string],
    price: number
}

const locationCardComponent = (props: Props): JSX.Element => {
    return (
        <div>
            location
        </div>
    )
}

export default locationCardComponent
