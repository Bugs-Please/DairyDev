import { useState } from 'react'
import LocationMarker from './LocationInfoBox'
import LocationInfoBox from './LocationInfoBox'
import Map, {Marker} from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import "./Map.css"

// define constants
const NATURAL_EVENT_WILDFIRE = 8;

const LocationMap = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)
    const [longitude, setlongitude] = useState(72)
    const [latitude, setlatitude] = useState(23)

    var loop = [];
    const MAPBOX_TOKEN ="pk.eyJ1Ijoic21peWFrYXdhIiwiYSI6ImNqcGM0d3U4bTB6dWwzcW04ZHRsbHl0ZWoifQ.X9cvdajtPbs9JDMG-CMDsA";
    {
        eventData.result ? 
        loop = eventData.result :
        loop = [];

    }
    const markers = loop.map((ev, index) => {
        return <Marker key={index} longitude={ev.record.latitude} latitude={ev.record.longitude} anchor="bottom">
        <LocationMarker key={index} lat={ev.record.longitude} lng={ev.record.latitude} onClick={() => setLocationInfo({ temp : ev.record.temp , 
                                                                                                                        latitude : ev.record.longitude,
                                                                                                                        longitude: ev.record.latitude })} />        
        </Marker>
    })

    return (
        <div className="map">
           <Map
        mapboxAccessToken="pk.eyJ1IjoiYWR3YWl0MDkiLCJhIjoiY2w2dzBqYmtkMDFpOTNpcW1wYmJjYXZreiJ9.pZ206Nvhb-M1uhjoIUBZ4g"
        initialViewState={{
          longitude: longitude,
          latitude: latitude,
          zoom: 7.5,
        }}
        mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
      >
       {/* {markers} */}
      </Map>
      {/* {locationInfo && <LocationInfoBox info={locationInfo} />} */}
        </div>
    )
}



export default LocationMap
