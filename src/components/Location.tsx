import { Typography } from 'antd';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import type { LatLngTuple } from 'leaflet';

function Location() {
  const position: LatLngTuple = [56.871500483890664, 60.53087013571997]; // Дворец свадеб, Екатеринбург

  return (
    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
      <Typography.Title className="section-title" level={3}>
        Место проведения
      </Typography.Title>
      <Typography.Paragraph style={{ color: '#6b8768', fontWeight: 500 }}>
        Дворец свадеб, Екатеринбург
      </Typography.Paragraph>
      <MapContainer
        center={position}
        zoom={16}
        style={{
          width: '100%',
          // maxWidth: 500,
          height: 460,
          margin: '0 auto',
          borderRadius: 16,
          boxShadow: '0 4px 24px 0 #b5c4b133',
          border: '2px solid #d9e3d7',
          background: '#f8f9f6',
          filter: 'grayscale(0.1) brightness(1.05) saturate(0.7)', // мягкий стиль
        }}
        scrollWheelZoom={false}
        dragging={true}
        zoomControl={true}
        attributionControl={false} // скрыть вотермарку Leaflet
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>Дворец свадеб, Екатеринбург</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Location;
