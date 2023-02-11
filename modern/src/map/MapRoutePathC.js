import React, { useId, useEffect, useState } from 'react';
import { useTheme } from '@mui/styles';
import { Polyline, useGoogleMap } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
// import { map } from './core/MapView';

const MapRoutePathC = ({ positions }) => {
  const id = useId();

  const theme = useTheme();
  const map = useGoogleMap();
  const [coordinates, setCoordinates] = useState([]);

  const reportColor = useSelector((state) => {
    const position = positions.find(() => true);
    if (position) {
      const attributes = state.devices.items[position.deviceId]?.attributes;
      if (attributes) {
        const color = attributes['web.reportColor'];
        if (color) {
          return color;
        }
      }
    }
    return theme.palette.colors.geometry;
  });

  const options = {
    strokeColor: reportColor,
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: reportColor,
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 30000,
    zIndex: 1,
  };

  // useEffect(() => {
  //   map.addSource(id, {
  //     type: 'geojson',
  //     data: {
  //       type: 'Feature',
  //       geometry: {
  //         type: 'LineString',
  //         coordinates: [],
  //       },
  //     },
  //   });
  //   map.addLayer({
  //     source: id,
  //     id,
  //     type: 'line',
  //     layout: {
  //       'line-join': 'round',
  //       'line-cap': 'round',
  //     },
  //     paint: {
  //       'line-color': ['get', 'color'],
  //       'line-width': 2,
  //     },
  //   });

  //   return () => {
  //     if (map.getLayer(id)) {
  //       map.removeLayer(id);
  //     }
  //     if (map.getSource(id)) {
  //       map.removeSource(id);
  //     }
  //   };
  // }, []);

  useEffect(() => {
    const coords = positions.map((item) => ({ lng: item.longitude, lat: item.latitude }));
    setCoordinates(coords);
    //   map.getSource(id).setData({
    //     type: 'Feature',
    //     geometry: {
    //       type: 'LineString',
    //       coordinates,
    //     },
    //     properties: {
    //       color: reportColor,
    //     },
    //   });
  }, [positions, reportColor]);

  return (
    <Polyline
      // onLoad={onLoad}
      path={coordinates}
      options={options}
    />
  );
};

export default MapRoutePathC;
