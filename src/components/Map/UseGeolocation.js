import { useEffect, useState } from 'react'
import { useMapEvents } from 'react-leaflet'

function UseGeolocation() {

    const [latLng, setLatLng] = useState(null);

    const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e) {
            setLatLng(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
    })



}



export default UseGeolocation;