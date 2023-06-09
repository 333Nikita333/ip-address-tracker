import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapMarker from '../MapMarker';

const MapBox = ({ location }) => {
  const { lat, lng } = location;

  return (
    <MapContainer
      key={`${lat}+${lng}`}
      center={[lat, lng]}
      zoom={13}
      style={{ height: '600px', width: '100%' }}
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
      />
      <ZoomControl position="bottomleft" />
      <MapMarker lat={lat} lng={lng} />
    </MapContainer>
  );
};

export default MapBox;
