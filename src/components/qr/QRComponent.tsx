import React from 'react'
import QR from '../../assets/images/QRCode.png';


import { QRWrapper } from './QRComponent.styled'

const QRComponent = (): JSX.Element => {
    return (
        <QRWrapper>
            <h1>Scan QR-code and take discount</h1>
            <img src={QR} />
        </QRWrapper>
    )
}

export default QRComponent
