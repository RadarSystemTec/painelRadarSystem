import { useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import { useGoogleMap } from '@react-google-maps/api';
// import { map } from './core/MapView';

const MapCameraC = ({
  latitude, longitude, positions,
}) => {
  const map = useGoogleMap();
  useEffect(() => {
    if (positions) {
      const coordinates = positions.map((item) => ({ lng: item.longitude, lat: item.latitude }));
      if (coordinates.length) {
        const bounds = coordinates.reduce((bounds, item) => bounds.extend(item), new window.google.maps.LatLngBounds());
        // map.fitBounds(bounds, { top: 30, right: 10, left: 50 });
        map.fitBounds(bounds);
      }
    } else {
      map.panTo({
        lat: latitude,
        lng: longitude,
      });
      map.setZoom(Math.max(map.getZoom(), 10));
    }
  }, [latitude, longitude, positions]);

  return null;
};

export default MapCameraC;
