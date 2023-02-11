import React, {
  useEffect,
  useRef, useState,
} from 'react';

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useAttributePreference } from '../../common/util/preferences';
import useMapStyles from './useMapStyles';

// const element = document.createElement('div');
// element.style.width = '100%';
// element.style.height = '100%';
// element.style.boxSizing = 'initial';

// export const map = new maplibregl.Map({
//   container: element,
//   attributionControl: false,
// });

// const initMap = async () => {
//   if (ready) return;
//   if (!map.hasImage('background')) {
//     Object.entries(mapImages).forEach(([key, value]) => {
//       map.addImage(key, value, {
//         pixelRatio: window.devicePixelRatio,
//       });
//     });
//   }
//   updateReadyValue(true);
// };

// map.addControl(new maplibregl.NavigationControl());

// const switcher = new SwitcherControl(
//   () => updateReadyValue(false),
//   (styleId) => savePersistedState('selectedMapStyle', styleId),
//   () => {
//     map.once('styledata', () => {
//       const waiting = () => {
//         if (!map.loaded()) {
//           setTimeout(waiting, 33);
//         } else {
//           initMap();
//         }
//       };
//       waiting();
//     });
//   },
// );

// map.addControl(switcher);

const GoogleMapView = ({ fullscreenControl = false, children }) => {
  const containerEl = useRef(null);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDzyyar2X07M9LYyyYcXCn35qkXrCXo6tM',
  });

  const center = {
    lat: -23.4696939,
    lng: -47.5068303,
  };

  const [mapReady, setMapReady] = useState(false);

  const mapStyles = useMapStyles();

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback((map) => {
    // console.log('loaded');
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback((map) => {
    setMap(null);
  }, []);
  // const [activeMapStyles] = usePersistedState('activeMapStyles', ['locationIqStreets', 'osm', 'carto']);
  // const [defaultMapStyle] = usePersistedState('selectedMapStyle', 'locationIqStreets');
  const mapboxAccessToken = useAttributePreference('mapboxAccessToken');
  const maxZoom = useAttributePreference('web.maxZoom');
  const selectZoom = useAttributePreference('web.selectZoom', 10);

  // useEffect(() => {
  //   if (maxZoom) {
  //     map.setMaxZoom(maxZoom);
  //   }
  // }, [maxZoom]);

  // useEffect(() => {
  //   maplibregl.accessToken = mapboxAccessToken;
  // }, [mapboxAccessToken]);

  // useEffect(() => {
  //   const filteredStyles = mapStyles.filter((style) => style.available && activeMapStyles.includes(style.id));
  //   switcher.updateStyles(filteredStyles, defaultMapStyle);
  // }, [mapStyles, defaultMapStyle]);

  // useEffect(() => {
  //   const listener = (ready) => setMapReady(ready);
  //   addReadyListener(listener);
  //   return () => {
  //     removeReadyListener(listener);
  //   };
  // }, []);

  // useLayoutEffect(() => {
  //   const currentEl = containerEl.current;
  //   currentEl.appendChild(element);
  //   map.resize();
  //   return () => {
  //     currentEl.removeChild(element);
  //   };
  // }, [containerEl]);

  const containerStyle = {
    width: '100%',
    height: '100%',
  };

  const mapOptions = { fullscreenControl, streetViewControl: false, zoomControl: false, mapTypeControl: false };

  return isLoaded && (
    <div style={{ width: '100%', height: '100%' }} ref={containerEl}>
      <GoogleMap
        id="main-map"
        mapContainerStyle={containerStyle}
        zoom={10}
        // center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={mapOptions}
      >
        {children}
      </GoogleMap>
    </div>
  );
};

export default GoogleMapView;
