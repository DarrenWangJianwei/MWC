import React from 'react'
import GoogleMapReact from 'google-map-react'

const GoogleMap = (content, { lat, lng, zoom }) => {
  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: content.lat || lat, lng: content.lng || lng },
      map,
      title: 'Hello World!'
    })
    return marker
  }

  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: process.env.GATSBY_GOOGLE_MAP_KEY
      }}
      defaultCenter={{
        lat: content.lat || lat,
        lng: content.lng || lng
      }}
      defaultZoom={content.zoom || zoom}
      onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
    ></GoogleMapReact>
  )
}

GoogleMap.defaultProps = {
  lat: 49.32768,
  lng: -123.1574,
  zoom: 13
}

export default GoogleMap
