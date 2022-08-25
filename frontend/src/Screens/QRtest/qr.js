import QRcode from 'qrcode';
import { QRCodeSVG } from 'qrcode.react';


const QR = (sensorId,user,user2,milkBatchNumber,billNumber,labReportNumber) => {
    const URL = `http://localhost:3000/trackyourOrder?sensorId=${sensorId.sensorId}`;
    return (
        
        <div className="qr">
            <QRCodeSVG value={URL} style={{ margin: 50 }} />
        </div>
    );
}

export default QR;