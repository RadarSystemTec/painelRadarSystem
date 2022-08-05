import { useGoogleMap } from '@react-google-maps/api';
import maplibregl from 'maplibre-gl';
import { useEffect } from 'react';
import { map } from './core/MapView';

const MapCurrentLocation = () => {
  const map = useGoogleMap();

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? 'Error: The Geolocation service failed.'
        : 'Error: Your browser doesn\'t support geolocation.',
    );
    infoWindow.open(map);
  }

  useEffect(() => {
    const infoWindow = new window.google.maps.InfoWindow();
    const locationButton = document.createElement('button');
    locationButton.textContent = 'Pan to Current Location';
    locationButton.classList.add('custom-map-control-button');

    map.controls[window.google.maps.ControlPosition.RIGHT_TOP].push(locationButton);

    locationButton.addEventListener('click', () => {
      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          },
          () => {
            handleLocationError(true, infoWindow, map.getCenter());
          },
        );
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }
    });

    // const control = new maplibregl.GeolocateControl({
    //   positionOptions: {
    //     enableHighAccuracy: true,
    //     timeout: 5000,
    //   },
    //   trackUserLocation: true,
    // });
    // map.addControl(control);
    // return () => map.removeControl(control);
  }, []);
  return null;
};

export default MapCurrentLocation;
