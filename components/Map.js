import { getCenter } from 'geolib'
import Image from 'next/image'
import React, { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'

const Map = ({searchResult}) => {
    const [selectedLocation, setSelectedLocation] = useState({})
    const coordinates = searchResult.map(res => ({
        longitude: res.long,
        latitude: res.lat,
    }))
    const center = getCenter(coordinates)
    const [viewPort, setViewPort] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11
    })



    return (
        <ReactMapGL
            mapStyle='mapbox://styles/dynaartist/ckwnyjyut3xt614n31ooesjbp'
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewPort}
            onViewportChange={(nextViewport)=> setViewPort(nextViewport)}
        >
            { searchResult.map((res) => (
                <div key={res.lat}>
                    <Marker 
                        longitude={res.long}
                        latitude={res.lat}
                        offsetLeft={-10}
                        offsetTop={-30}
                    >
                        <div className="w-6 h-9 relative cursor-pointer text-2xl hover:animate-bounce"
                            onClick={()=>setSelectedLocation(res)}
                        >
                            <Image src="/location.webp" layout='fill' />
                        </div>
                    </Marker>
                    { selectedLocation === res && (
                            <Popup 
                                closeOnClick={true} 
                                onClose={()=>setSelectedLocation({})}
                                latitude={res.lat}
                                longitude={res.long}
                                offsetTop={-20}
                            >
                                {res.title}
                            </Popup> )}
                </div>
            )) }
        </ReactMapGL>
    )
}

export default Map
