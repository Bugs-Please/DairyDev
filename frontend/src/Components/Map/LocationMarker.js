
const LocationMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
        <img src="https://img.icons8.com/fluency/48/000000/checked-truck.png" alt="info"/>       
        </div>
    )
}

export default LocationMarker
