import { useEffect, useState } from 'react'
import { useMapEvents } from 'react-leaflet'
import PostRequest from './../PostRequest';
import { Link } from 'react-router-dom'

function UseGeolocation() {

    const [latlng, setLatLng] = useState(null);

    const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e) {
            setLatLng(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
    })

    console.log(latlng)


    return (

        <Link className='request__new-btn' to='/postRequest' state={{ setLatLng: latlng }}>
            New Request
        </Link>
    );
}



export default UseGeolocation;