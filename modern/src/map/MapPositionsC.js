import React, { useCallback, useEffect, useId } from 'react';
import { Marker, useGoogleMap } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import makeStyles from '@mui/styles/makeStyles';
import usePersistedState from '../common/util/usePersistedState';
import { mapIconKey } from './core/preloadImages';
import { findFonts } from './core/mapUtil';
import { getStatusColor, deviceColor } from '../common/util/formatter';
import { useAttributePreference } from '../common/util/preferences';
import car from '../resources/images/icon/custom/car';
import van from '../resources/images/icon/custom/van';
import pickup from '../resources/images/icon/custom/pickup';
import motorcycle from '../resources/images/icon/custom/motorcycle';

const MapPositionsC = ({ positions, onClick, showStatus }) => {
  const id = useId();
  const clusters = `${id}-clusters`;
  const devices = useSelector((state) => state.devices.items);

  const map = useGoogleMap();

  // const [mapCluster] = usePersistedState('mapCluster', true);
  const iconScale = useAttributePreference('iconScale', 1);

  // const createFeature = (devices, position) => {
  //   const device = devices[position.deviceId];
  //   return {
  //     id: position.id,
  //     deviceId: position.deviceId,
  //     name: device.name,
  //     category: mapIconKey(device.category),
  //     color: showStatus ? position.attributes.color || getStatusColor(device.status) : 'neutral',
  //   };
  // };

  // const onMouseEnter = () => map.getCanvas().style.cursor = 'pointer';
  // const onMouseLeave = () => map.getCanvas().style.cursor = '';

  const onMapClick = useCallback((event) => {
    if (!event.defaultPrevented) {
      onClick();
    }
  }, [onClick]);

  const onMarkerClick = useCallback((event) => {
    const feature = event;
    if (onClick) {
      onClick(feature.position.id, feature.device.id);
    }
  }, [onClick]);

  return positions.filter((it) => devices.hasOwnProperty(it.deviceId)).map((position) => {
    const device = devices[position.deviceId];
    const path = {
      // bus: 'M10.591 2.9588 10.5752 26.2156C10.4717 26.6693 10.6126 27.4977 11.6465 27.5917H17.7845C18.1291 27.6176 18.8001 27.2959 18.5767 26.2658L18.5857 2.7446C18.5017 1.7476 18.3991 1.0928 16.9614.9279H12.2391C12.2828.9396 10.6733.7204 10.5752 2.9221M17.6841 7.3802C16.0288 7.2349 13.2023 7.0607 11.6134 7.472Q10.9645 5.5402 11.2959 4.378C11.923 4.0945 15.0214 3.2423 17.8249 4.3551Q18.2873 5.3757 17.6744 7.3089M17.4578 26.0671C15.5383 26.1297 13.7255 26.3439 11.8746 26.0705 11.6964 25.9868 11.6741 25.6585 11.8132 25.5695 13.4474 25.6457 15.4724 25.681 17.4469 25.5389 17.654 25.5654 17.6805 25.9466 17.4632 26.0644M11.6131 11.0464 11.57 24.7892C11.2844 25.3015 10.9703 25.0016 10.9202 24.8053 10.9084 20.223 10.8963 15.6407 10.8842 11.0585 10.921 10.9211 11.2829 10.55 11.6127 11.0448M18.3334 24.9379C18.0906 25.1878 17.7979 25.145 17.6551 24.945L17.6363 11.052C17.722 10.9235 18.007 10.6651 18.336 11.0056z',
      car: car(position, device),
      van: van(position, device),
      pickup: pickup(position, device),
      motorcycle: motorcycle(position, device),

      // default: 'm0.002 10.6816l-1.131 3.3907a12.374 12.374 0 0 1 1.131 -0.0625 12.374 12.374 0 0 1 1.129 0.0566l-1.129-3.3848zm-0.002 3.9434a12.374 12.374 0 0 0 -12.375 12.375 12.374 12.374 0 0 0 12.375 12.375 12.374 12.374 0 0 0 12.375 -12.375 12.374 12.374 0 0 0 -12.375 -12.375z',
      default: van(position, device),
    };

    const svgMarker = {
      path: path[device.category] || path.default,
      fillColor: deviceColor(device),
      fillOpacity: 1,
      strokeWeight: (path[device.category]) ? 0.6 : 1.6,
      rotation: position.course,
      size: new window.google.maps.Size(20, 32),
      scale: (path[device.category]) ? 1.7 : 1,
      anchor: new window.google.maps.Point(0, 30),
      labelOrigin: new window.google.maps.Point(0, 0),
    };

    const svg = path[device.category] || path.default;

    return (
      <Marker
        key={device.id}
        id={device.id}
        name={device.id}
        label={{ text: `${device.name}`, fontSize: '16px', fontWeight: 'bold' }}
        // label={{ text: device.name, color: 'black', fontSize: 10, fontWeight: 20, className: 'map-marker-title', fontFamily: 'Arial' }}
        onClick={(event) => onMarkerClick({ ...event, device, position })}
        icon={{
          anchor: new window.google.maps.Point(50, 50),
          fillColor: deviceColor(device),
          // rotation: posi,
          // size: new window.google.maps.Size(100, 50),
          // path: svg,
          labelOrigin: new window.google.maps.Point(0, 0),
          url: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`,
          // rotation: position.course,
        }}
        position={{ lat: position.latitude, lng: position.longitude }}
      />
    );
  });
};

export default MapPositionsC;
