import { Marker, Popup } from 'react-leaflet';

const MapMarker = ({ lat, lng }) => {
  const popupLabel = `Latitude: ${lat}, Longitude: ${lng}`;

  return (
    <Marker position={[lat, lng]}>
      <Popup>{popupLabel}</Popup>
    </Marker>
  );
};

export default MapMarker;
