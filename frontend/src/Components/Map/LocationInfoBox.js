const LocationInfoBox = ({ info }) => {
    console.log("inside")
    return (
        <div className="location-info">
            <h2>Event Location Info</h2>
            <ul>
    <li>TEMP: <strong>{ info?.temp }</strong></li>
    <li>LATITUDE: <strong>{ info?.latitude }</strong></li>
    <li>LONGITUTDE: <strong>{ info?.longitude }</strong></li>

            </ul>
        </div>
    )
}

export default LocationInfoBox
