import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';

const Map = ({ eventData, center, zoom }) => {
  const googleapi = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

  const markers = eventData.map((event) => {
    const geoSize = event.geometries.length;
    const categoryId = event.categories[0].id;
    // incase geometries type is a polygon, we need to flatten the coordinates

    if (geoSize > 1) {
      const geoArray = event.geometries;
      return geoArray.map((geoLoc) => {
        if (Array.isArray(geoLoc.coordinates[0])) {
          const coordArray = geoLoc.coordinates;
          const flatPolygon = coordArray.flat(1);
          return flatPolygon.map((poly) => {
            <>
              <LocationMarker id={categoryId} lat={poly[1]} lng={poly[0]} />
            </>;
          });
        }
        <>
          <LocationMarker id={categoryId} lat={geoLoc.coordinates[1]} lng={geoLoc.coordinates[0]} />
        </>;
      });
    } else {
      if (Array.isArray(event.geometries[0].coordinates[0])) {
        const coordArray = event.geometries[0].coordinates;
        const flatPolygon = coordArray.flat(1);
        return flatPolygon.map((innerPolyArr) => {
          return innerPolyArr.map((coords) => {
            <>
              <LocationMarker id={categoryId} lat={coords[1]} lng={coords[0]} />
            </>;
          });
        });
      } else {
        return (
          <LocationMarker
            id={categoryId}
            lat={event.geometries[0].coordinates[1]}
            lng={event.geometries[0].coordinates[0]}
          />
        );
      }
    }
  });

  return (
    <div className='googleMap'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleapi }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
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
