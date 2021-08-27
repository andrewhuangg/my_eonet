import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';

const Map = ({ center, zoom }) => {
  const googleapi = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

  return (
    <div className='googleMap'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleapi }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <LocationMarker lat={center.lat} lng={center.lng} />
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 37.773972,
    lng: -122.431297,
  },
  zoom: 6,
};

export default Map;
