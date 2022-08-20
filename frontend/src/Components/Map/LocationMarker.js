import locationIcon from '@iconify/icons-mdi/fire-alert'

const LocationMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
        <img src="https://img.icons8.com/fluency/48/000000/checked-truck.png"/>       
        </div>
    )
}

export default LocationMarker
