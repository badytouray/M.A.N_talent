import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '60vh',
  margin: 'auto'
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDrmse8-r3eQbzTbHjaExyhqEvbhEgUweA"
  
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{
          lat: 51.060551,
          lng: -0.325850
        }}
        zoom={13}
       
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker
        position={{
          lat: 51.060551,
          lng: -0.325850
        }}
        />
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)