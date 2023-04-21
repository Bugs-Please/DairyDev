import QRcode from 'qrcode';
import { QRCodeSVG } from 'qrcode.react';


const QR = (props) => {
    console.log(props)
    const URL = `https://5227-115-248-146-117.ngrok-free.app/track?sensorId=${props.sensorId}&user=${props.user}&user2=${props.user2}
    &milkBatchNumber=${props.milkBatchNumber}&billNumber=${props.billNumber}&labReportNumber=${props.labReportNumber}`;
    return (
        
        <div className="qr">
            <QRCodeSVG value={URL} style={{ margin: 50 }} />
        </div>
    );
}

export default QR;