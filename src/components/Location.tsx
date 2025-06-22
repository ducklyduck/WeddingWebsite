import { Typography } from 'antd';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import type { LatLngTuple } from 'leaflet';

function Location() {
  const position: LatLngTuple = [56.83921751452974, 60.58370595277245]; // Шейнкмана 10, Ресторан Dieci, Екатеринбург

  return (
    <Typography className='section-location' >
      <Typography.Title className="section-title" >
        Место проведения
      </Typography.Title>
      <Typography.Paragraph className='location-paragraph section-paragraph' >
        Город Екатеринбург, <br/>
        Шейнкмана, 10, Ресторан Dieci
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
          filter: 'sepia(0.15)  brightness(1.05) saturate(0.75)', // мягкий стиль
        }}
        scrollWheelZoom={false}
        dragging={true}
        zoomControl={true}
        attributionControl={false} // скрыть вотермарку Leaflet
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>Шейнкмана 10, Ресторан Dieci, Екатеринбург</Popup>
        </Marker>
      </MapContainer>
    </Typography>
  );
}

export default Location;
