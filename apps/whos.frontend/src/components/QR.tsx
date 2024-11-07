import React from 'react';
import {QRCodeSVG} from 'qrcode.react';

interface IQR {
    value: string | string[]
}

const QR = ({ value }:IQR) => {
    return <QRCodeSVG value={value} size={150} />;
};

export default QR;
