import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const GoogleMap = props => {
  const mapStyles = {
    width: '70%',
    height: '84%',
  };
  return (
    <Map
      google={window.google}
      zoom={10}
      style={mapStyles}
      initialCenter={{ lat: 43.6005615, lng: -116.2177009}}
    >
      <Marker position = {{ lat: 43.6005615, lng: -116.2177009}} />
    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey:"AIzaSyAa_05unLMf5OQPJyPUwx8eo7rx01Njqsg"
})(GoogleMap);