import { useEffect } from 'react';

import { useGoogleMap } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import dimensions from '../../common/theme/dimensions';
import { usePrevious } from '../../reactHelper';
import usePersistedState from '../../common/util/usePersistedState';
import { useAttributePreference } from '../../common/util/preferences';

const MapSelectedDeviceC = () => {
  const map = useGoogleMap();
  const selectedDeviceId = useSelector((state) => state.devices.selectedId);
  const previousDeviceId = usePrevious(selectedDeviceId);
  const selectZoom = useAttributePreference('web.selectZoom', 10);
  const position = useSelector((state) => state.positions.items[selectedDeviceId]);
  const [mapFollow] = usePersistedState('mapFollow', false);

  useEffect(() => {
    if ((selectedDeviceId !== previousDeviceId || mapFollow) && position) {
      map.panTo({
        lat: position.latitude,
        lng: position.longitude,
      });
      map.setZoom(Math.max(map.getZoom(), selectZoom));
    }
  }, [selectedDeviceId]);

  return null;
};

export default MapSelectedDeviceC;
