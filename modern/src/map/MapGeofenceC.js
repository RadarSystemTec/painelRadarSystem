import React, { useId, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/styles';
import circle from '@turf/circle';
import { InfoBox, useGoogleMap } from '@react-google-maps/api';
import { findFonts, geofenceToFeature, geofenceToGoogleFeature, reverseCoordinates } from './core/mapUtil';
import usePersistedState from '../common/util/usePersistedState';

const MapGeofence = () => {
  const id = useId();

  const theme = useTheme();

  const [mapGeofences] = usePersistedState('mapGeofences', true);

  const geofences = useSelector((state) => state.geofences.items);
  const map = useGoogleMap();

  // function polygonCenter(poly) {
  //   const vertices = poly.getPath();
  //   // console.log('vertices');
  //   // console.log(vertices);
  //   // console.log(vertices.getArray());
  //   // put all latitudes and longitudes in arrays
  //   const longitudes = vertices.getArray().map((value, i) => value.lng());
  //   const latitudes = vertices.getArray().map((value, i) => value.lat());
  //   // const longitudes = new Array(vertices.length).map((_, i) => vertices.getAt(i).lng());
  //   // const latitudes = new Array(vertices.length).map((_, i) => vertices.getAt(i).lat());
  //   // console.log(longitudes);
  //   // console.log(latitudes);
  //   // sort the arrays low to high
  //   latitudes.sort();
  //   longitudes.sort();

  //   // get the min and max of each
  //   const lowX = latitudes[0];
  //   const highX = latitudes[latitudes.length - 1];
  //   const lowy = longitudes[0];
  //   const highy = longitudes[latitudes.length - 1];

  //   // center of the polygon is the starting point plus the midpoint
  //   const centerX = lowX + ((highX - lowX) / 2);
  //   const centerY = lowy + ((highy - lowy) / 2);

  //   return (new window.google.maps.LatLng(centerX, centerY));
  // }

  useEffect(() => {
    if (mapGeofences) {
      console.log('Change');
      console.log(mapGeofences);
      console.log(geofences);

      Object.values(geofences).map((geofence) => {
        if (geofence.area.indexOf('CIRCLE') > -1) {
          const circle = new window.google.maps.Circle();
          const options = {
            strokeColor: geofence.attributes.color || theme.palette.colors.geometry,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: geofence.attributes.color || theme.palette.colors.geometry,
            fillOpacity: 0.55,
            clickable: false,
            draggable: false,
            editable: false,
            visible: true,
            // radius: 95.4,
            zIndex: 1,
          };

          const coordinates = geofence.area.replace(/CIRCLE|\(|\)|,/g, ' ').trim().split(/ +/);
          const circleCenter = new window.google.maps.LatLng(parseFloat(coordinates[0]), parseFloat(coordinates[1]));
          // console.log(circleCenter);
          circle.setCenter(circleCenter);
          circle.setRadius(parseFloat(coordinates[2]));
          circle.setOptions(options);
          // circle.setMap(map);

          const marker = new window.google.maps.Marker({
            position: circleCenter,
            label: { text: geofence.name, fontWeight: '600', fontSize: '17px' },
            icon: '.',
          });
          marker.setMap(map);
          circle.setMap(map);
        } else if (geofence.area.indexOf('LINESTRING') > -1) {
          const polyline = geofenceToGoogleFeature(theme, geofence);
          // console.log('polyline');
          // console.log(polyline);

          const bounds = new window.google.maps.LatLngBounds();
          polyline.geometry.coordinates.map((coord) => bounds.extend(coord));
          const paths = polyline.geometry.coordinates;

          const marker = new window.google.maps.Marker({
            position: bounds.getCenter(),
            label: { text: geofence.name, fontWeight: '600', fontSize: '17px' },
            anchorPoint: new window.google.maps.Point(0, 0),
            labelOrigin: new window.google.maps.Point(0, 0),
            icon: '.',
          });
          marker.setMap(map);
          const geofencePath = new window.google.maps.Polyline({
            path: paths,
            strokeColor: geofence.attributes.color || theme.palette.colors.geometry,
            strokeOpacity: 1.0,
            strokeWeight: 4.5,
          });

          geofencePath.setMap(map);
        } else if (geofence.area.indexOf('POLYGON') > -1) {
          const polygon = geofenceToGoogleFeature(theme, geofence);
          const bounds = new window.google.maps.LatLngBounds();
          const paths = polygon.geometry.coordinates;
          // paths[0].map((value) => {
          //   const marker = new window.google.maps.Marker({
          //     position: value,
          //     // label: { text: geofence.name, fontWeight: '600', fontSize: '17px' },
          //     anchorPoint: new window.google.maps.Point(0, 0),
          //     labelOrigin: new window.google.maps.Point(0, 0),
          //     icon: '',
          //     draggable: true,
          //   });

          //   marker.setMap(map);
          //   return {};
          // });

          const geofencePath = new window.google.maps.Polygon({
            paths,
            strokeColor: geofence.attributes.color || theme.palette.colors.geometry,
            strokeOpacity: 0.8,
            strokeWeight: 3,
            fillColor: geofence.attributes.color || theme.palette.colors.geometry,
            fillOpacity: 0.35,
          });

          geofencePath.getPath().getArray().map((coord) => bounds.extend(coord));
          const marker = new window.google.maps.Marker({
            position: bounds.getCenter(),
            label: { text: geofence.name, fontWeight: '600', fontSize: '17px' },
            anchorPoint: new window.google.maps.Point(0, 0),
            labelOrigin: new window.google.maps.Point(0, 0),
            icon: '.',
          });

          marker.setMap(map);
          geofencePath.setMap(map);
        }
        return {};
      });
    }
  }, [mapGeofences, geofences]);
  return null;
  // Object.values(geofences).map((geofence) => {
  //   if (geofence.area.indexOf('CIRCLE') > -1) {
  //     const coordinates = geofence.area.replace(/CIRCLE|\(|\)|,/g, ' ').trim().split(/ +/);
  //     console.log({ lat: parseFloat(coordinates[0]), lng: parseFloat(coordinates[1]) });
  //     return <Circle center={{ lat: parseFloat(coordinates[0]), lng: parseFloat(coordinates[1]) }} options={options} />;
  //   }
  // })
};

export default MapGeofence;
