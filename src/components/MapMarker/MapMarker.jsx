import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const customMarker = L.icon({
  iconUrl: '/src/assets/icon-location.svg',
  iconSize: [46, 56],
});

const MapMarker = ({ lat, lng }) => {
  const popupLabel = `Latitude: ${lat}, Longitude: ${lng}`;

  return (
    <Marker position={[lat, lng]} icon={customMarker}>
      <Popup>{popupLabel}</Popup>
    </Marker>
  );
};

export default MapMarker;
