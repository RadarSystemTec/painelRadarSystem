import { useGoogleMap } from '@react-google-maps/api';
import maplibregl from 'maplibre-gl';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { usePreference } from '../../common/util/preferences';
// import { map } from '../core/MapView';

const MapDefaultCamera = () => {
  const selectedDeviceId = useSelector((state) => state.devices.selectedId);
  const positions = useSelector((state) => state.positions.items);
  const bounds = new window.google.maps.LatLngBounds();
  const defaultLatitude = usePreference('latitude');
  const defaultLongitude = usePreference('longitude');
  const defaultZoom = usePreference('zoom', 0);

  const [initialized, setInitialized] = useState(false);

  const map = useGoogleMap();

  useEffect(() => {
    if (selectedDeviceId) {
      setInitialized(true);
    } else if (!initialized) {
      if (defaultLatitude && defaultLongitude) {
        map.panTo({
          lat: defaultLatitude,
          lng: defaultLongitude,
        });

        map.setZoom(defaultZoom);

        setInitialized(true);
      } else {
        const coordinates = Object.values(positions).map((item) => {
          const coord = { lng: item.longitude, lat: item.latitude };
          return coord;
        });

        if (coordinates.length > 1) {
          console.log(coordinates);
          // coordinates.map((value, index) => bounds.extend({ lat: value.latitude, lng: value.longitude }));
          const bounds = coordinates.reduce((bounds, item) => bounds.extend(item), new window.google.maps.LatLngBounds(coordinates[0], coordinates[0]));
          //   const canvas = map.getCanvas();
          //   map.fitBounds(bounds, {
          //     duration: 0,
          //     padding: Math.min(canvas.width, canvas.height) * 0.1,
          //   });
          map.fitBounds(bounds);
          setInitialized(true);
        } else if (coordinates.length) {
          //   const [individual] = coordinates;
          //   map.jumpTo({
          //     center: individual,
          //     zoom: Math.max(map.getZoom(), 10),
          //   });
          //   setInitialized(true);
        }
      }
    }
  }, [selectedDeviceId, initialized, defaultLatitude, defaultLongitude, defaultZoom, positions]);

  return null;
};

export default MapDefaultCamera;
