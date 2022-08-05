import React, { useCallback, useEffect } from 'react';
import { Marker } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import makeStyles from '@mui/styles/makeStyles';
import usePersistedState from '../common/util/usePersistedState';
import { mapIconKey } from './core/preloadImages';
import { findFonts } from './core/mapUtil';
import { getStatusColor, deviceColor } from '../common/util/formatter';
import { useId, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { map } from './core/MapView';
import { getStatusColor } from '../common/util/formatter';
import usePersistedState from '../common/util/usePersistedState';
import { mapIconKey } from './core/preloadImages';
import { findFonts } from './core/mapUtil';
import { useAttributePreference } from '../common/util/preferences';

const MapPositions = ({ positions, onClick, showStatus }) => {
  const id = useId();
  const clusters = `${id}-clusters`;
  const devices = useSelector((state) => state.devices.items);

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
    event.preventDefault();
    const feature = event.features[0];
    if (onClick) {
      onClick(feature.properties.id, feature.properties.deviceId);
    }
  }, [onClick]);

<<<<<<< HEAD
  // const onClusterClick = useCallback((event) => {
  //   const features = map.queryRenderedFeatures(event.point, {
  //     layers: [clusters],
  //   });
  //   const clusterId = features[0].properties.cluster_id;
  //   map.getSource(id).getClusterExpansionZoom(clusterId, (error, zoom) => {
  //     if (!error) {
  //       map.easeTo({
  //         center: features[0].geometry.coordinates,
  //         zoom,
  //       });
  //     }
  //   });
  // }, [clusters]);

  // useEffect(() => {
  //   map.addSource(id, {
  //     type: 'geojson',
  //     data: {
  //       type: 'FeatureCollection',
  //       features: [],
  //     },
  //     cluster: mapCluster,
  //     clusterMaxZoom: 14,
  //     clusterRadius: 50,
  //   });
  //   map.addLayer({
  //     id,
  //     type: 'symbol',
  //     source: id,
  //     filter: ['!', ['has', 'point_count']],
  //     layout: {
  //       'icon-image': '{category}-{color}',
  //       'icon-allow-overlap': true,
  //       'text-field': '{name}',
  //       'text-allow-overlap': true,
  //       'text-anchor': 'bottom',
  //       'text-offset': [0, -2],
  //       'text-font': findFonts(map),
  //       'text-size': 12,
  //     },
  //     paint: {
  //       'text-halo-color': 'white',
  //       'text-halo-width': 1,
  //     },
  //   });
  //   map.addLayer({
  //     id: clusters,
  //     type: 'symbol',
  //     source: id,
  //     filter: ['has', 'point_count'],
  //     layout: {
  //       'icon-image': 'background',
  //       'text-field': '{point_count_abbreviated}',
  //       'text-font': findFonts(map),
  //       'text-size': 14,
  //     },
  //   });

  //   map.on('mouseenter', id, onMouseEnter);
  //   map.on('mouseleave', id, onMouseLeave);
  //   map.on('mouseenter', clusters, onMouseEnter);
  //   map.on('mouseleave', clusters, onMouseLeave);
  //   map.on('click', id, onMarkerClick);
  //   map.on('click', clusters, onClusterClick);

  //   return () => {
  //     map.off('mouseenter', id, onMouseEnter);
  //     map.off('mouseleave', id, onMouseLeave);
  //     map.off('mouseenter', clusters, onMouseEnter);
  //     map.off('mouseleave', clusters, onMouseLeave);
  //     map.off('click', id, onMarkerClick);
  //     map.off('click', clusters, onClusterClick);

  //     if (map.getLayer(id)) {
  //       map.removeLayer(id);
  //     }
  //     if (map.getLayer(clusters)) {
  //       map.removeLayer(clusters);
  //     }
  //     if (map.getSource(id)) {
  //       map.removeSource(id);
  //     }
  //   };
  // }, [mapCluster, clusters, onMarkerClick, onClusterClick]);

  // useEffect(() => {
  //   map.getSource(id).setData({
  //     type: 'FeatureCollection',
  //     features: positions.filter((it) => devices.hasOwnProperty(it.deviceId)).map((position) => ({
  //       type: 'Feature',
  //       geometry: {
  //         type: 'Point',
  //         coordinates: [position.longitude, position.latitude],
  //       },
  //       properties: createFeature(devices, position),
  //     })),
  //   });
  // }, [devices, positions]);

  return positions.filter((it) => devices.hasOwnProperty(it.deviceId)).map((position) => {
    const device = devices[position.deviceId];
    const path = {
      bus: 'M10.591 2.9588 10.5752 26.2156C10.4717 26.6693 10.6126 27.4977 11.6465 27.5917H17.7845C18.1291 27.6176 18.8001 27.2959 18.5767 26.2658L18.5857 2.7446C18.5017 1.7476 18.3991 1.0928 16.9614.9279H12.2391C12.2828.9396 10.6733.7204 10.5752 2.9221M17.6841 7.3802C16.0288 7.2349 13.2023 7.0607 11.6134 7.472Q10.9645 5.5402 11.2959 4.378C11.923 4.0945 15.0214 3.2423 17.8249 4.3551Q18.2873 5.3757 17.6744 7.3089M17.4578 26.0671C15.5383 26.1297 13.7255 26.3439 11.8746 26.0705 11.6964 25.9868 11.6741 25.6585 11.8132 25.5695 13.4474 25.6457 15.4724 25.681 17.4469 25.5389 17.654 25.5654 17.6805 25.9466 17.4632 26.0644M11.6131 11.0464 11.57 24.7892C11.2844 25.3015 10.9703 25.0016 10.9202 24.8053 10.9084 20.223 10.8963 15.6407 10.8842 11.0585 10.921 10.9211 11.2829 10.55 11.6127 11.0448M18.3334 24.9379C18.0906 25.1878 17.7979 25.145 17.6551 24.945L17.6363 11.052C17.722 10.9235 18.007 10.6651 18.336 11.0056z',
      car: 'm12.7996.2258h-5.0295c-1.3323 0-2.4142 1.4822-2.4142 2.8165v14.8874c0 1.3323 1.0798 2.4142 2.4142 2.4142h5.0295c1.3323 0 2.4142-1.0819 2.4142-2.4142v-14.8874c0-1.3344-1.0819-2.8165-2.4142-2.8165zm1.9913 6.0683v4.9905l-1.1681.1499v-2.0549l1.1681-3.0855zm-.6118-1.4596c-.4352 1.669-.9484 3.6397-.9484 3.6397h-5.8917l-.9505-3.6397c.0021 0 3.8019-1.2913 7.7906 0zm-7.2199 4.6785v1.9215l-1.1681-.1499v-4.855l1.1681 3.0834zm-1.1681 6.9407v-4.4301l1.1681.1458v3.5063l-1.1681.778zm.6672 1.2605.9484-1.4267h5.8897l.9484 1.4267h-7.7865zm7.1645-2.1719v-3.3687l1.1681-.1519v4.2987l-1.1681-.778z',
      default: 'm0.002 10.6816l-1.131 3.3907a12.374 12.374 0 0 1 1.131 -0.0625 12.374 12.374 0 0 1 1.129 0.0566l-1.129-3.3848zm-0.002 3.9434a12.374 12.374 0 0 0 -12.375 12.375 12.374 12.374 0 0 0 12.375 12.375 12.374 12.374 0 0 0 12.375 -12.375 12.374 12.374 0 0 0 -12.375 -12.375z',
=======
  const onClusterClick = useCallback((event) => {
    event.preventDefault();
    const features = map.queryRenderedFeatures(event.point, {
      layers: [clusters],
    });
    const clusterId = features[0].properties.cluster_id;
    map.getSource(id).getClusterExpansionZoom(clusterId, (error, zoom) => {
      if (!error) {
        map.easeTo({
          center: features[0].geometry.coordinates,
          zoom,
        });
      }
    });
  }, [clusters]);

  useEffect(() => {
    map.addSource(id, {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [],
      },
      cluster: mapCluster,
      clusterMaxZoom: 14,
      clusterRadius: 50,
    });
    map.addLayer({
      id,
      type: 'symbol',
      source: id,
      filter: ['!', ['has', 'point_count']],
      layout: {
        'icon-image': '{category}-{color}',
        'icon-size': iconScale,
        'icon-allow-overlap': true,
        'text-field': '{name}',
        'text-allow-overlap': true,
        'text-anchor': 'bottom',
        'text-offset': [0, -2 * iconScale],
        'text-font': findFonts(map),
        'text-size': 12,
      },
      paint: {
        'text-halo-color': 'white',
        'text-halo-width': 1,
      },
    });
    map.addLayer({
      id: clusters,
      type: 'symbol',
      source: id,
      filter: ['has', 'point_count'],
      layout: {
        'icon-image': 'background',
        'icon-size': iconScale,
        'text-field': '{point_count_abbreviated}',
        'text-font': findFonts(map),
        'text-size': 14,
      },
    });

    map.on('mouseenter', id, onMouseEnter);
    map.on('mouseleave', id, onMouseLeave);
    map.on('mouseenter', clusters, onMouseEnter);
    map.on('mouseleave', clusters, onMouseLeave);
    map.on('click', id, onMarkerClick);
    map.on('click', clusters, onClusterClick);
    map.on('click', onMapClick);

    return () => {
      map.off('mouseenter', id, onMouseEnter);
      map.off('mouseleave', id, onMouseLeave);
      map.off('mouseenter', clusters, onMouseEnter);
      map.off('mouseleave', clusters, onMouseLeave);
      map.off('click', id, onMarkerClick);
      map.off('click', clusters, onClusterClick);
      map.off('click', onMapClick);

      if (map.getLayer(id)) {
        map.removeLayer(id);
      }
      if (map.getLayer(clusters)) {
        map.removeLayer(clusters);
      }
      if (map.getSource(id)) {
        map.removeSource(id);
      }
>>>>>>> 7347b398aae694c58feb1a48944778a7c581dc72
    };

    const svgMarker = {
      path: path[device.category] || path.default,
      fillColor: deviceColor(device),
      fillOpacity: 1,
      strokeWeight: (path[device.category]) ? 0.5 : 1.5,
      rotation: position.course,
      size: new window.google.maps.Size(20, 32),
      scale: (path[device.category]) ? 1.7 : 1,
      anchor: new window.google.maps.Point(15, 30),
      labelOrigin: new window.google.maps.Point(30, 15),
    };

    return (
      <Marker
        key={device.id}
        id={device.id}
        label={{ text: `${device.name}`, fontWeight: '500' }}
        // label={{ text: device.name, color: "black", fontSize: 10, fontWeight: 10, className: "map-marker-title", fontFamily: "Arial" }}
        onClick={(event) => onMarkerClick({ ...event, device })}
        icon={svgMarker}
        position={{ lat: position.latitude, lng: position.longitude }}
      />
    );
  });
};

export default MapPositions;
