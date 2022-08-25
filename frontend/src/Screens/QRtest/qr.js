import QRcode from 'qrcode';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { QRCodeSVG } from 'qrcode.react';

const QR = () => {
    const { id } = useParams();
    console.log(id);
    return (
        
        <div className="qr">
            <QRCodeSVG value={`http://localhost:3000/tracking/${id}`} style={{ margin: 50 }} />
        </div>
    );
}

export default QR;