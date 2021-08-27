import React from 'react';
import { Icon } from '@iconify/react';
import fireAlert from '@iconify/icons-mdi/fire-alert';
import drought from '@iconify/icons-mdi/barley-off';
import dustHaze from '@iconify/icons-mdi/hexagon-multiple-outline';
import defaultNature from '@iconify/icons-mdi/nature';
import earthquake from '@iconify/icons-mdi/resistor';
import flood from '@iconify/icons-mdi/waves';
import landslide from '@iconify/icons-mdi/traffic-cone';
import manmade from '@iconify/icons-mdi/alert-outline';
import sealakeice from '@iconify/icons-mdi/snowflake-melt';
import severeStorm from '@iconify/icons-mdi/weather-lightning-rainy';
import snow from '@iconify/icons-mdi/weather-snowy-heavy';
import extremeTemperature from '@iconify/icons-mdi/thermometer-high';
import volcano from '@iconify/icons-mdi/image-filter-hdr';
import waterColor from '@iconify/icons-mdi/format-color-fill';

const LocationMarker = ({ lat, lng, onClick, id }) => {
  let icon;
  switch (id) {
    case 6:
      icon = drought;
      break;
    case 7:
      icon = dustHaze;
      break;
    case 16:
      icon = earthquake;
      break;
    case 9:
      icon = flood;
      break;
    case 14:
      icon = landslide;
      break;
    case 19:
      icon = manmade;
      break;
    case 15:
      icon = sealakeice;
      break;
    case 10:
      icon = severeStorm;
      break;
    case 17:
      icon = snow;
      break;
    case 18:
      icon = extremeTemperature;
      break;
    case 12:
      icon = volcano;
      break;
    case 13:
      icon = waterColor;
      break;
    case 8:
      icon = fireAlert;
      break;
    default:
      icon = defaultNature;
      break;
  }

  return (
    <>
      <div className='locationMarker' onClick={onClick}>
        <Icon icon={icon} className={`locationMarker__icon locationMarker__icon-${id}`} />
      </div>
    </>
  );
};

export default LocationMarker;
