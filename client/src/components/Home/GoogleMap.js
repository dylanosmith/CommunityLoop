import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const GoogleMap = props => {
  const mapStyles = {
    width: '70%',
    height: '84%',
  };

  const [markerState, setMarkerState] = useState({
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  });

  const onMarkerClick = (props, marker, e) =>
    setMarkerState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  return (
    <Map
      google={window.google}
      zoom={10}
      style={mapStyles}
      initialCenter={{ lat: 43.6005615, lng: -116.2177009}}
    >
      <Marker name={'Task Name'} position = {{ lat: 43.6005615, lng: -116.2177009}} onClick={onMarkerClick} />
      <InfoWindow
          marker={markerState.activeMarker}
          visible={markerState.showingInfoWindow}>
            <div>
              <h4>{markerState.selectedPlace.name}</h4>
            </div>
        </InfoWindow>
      <Marker name={'The Ambrose School'} position = {{ lat: 43.6605644, lng: -116.3758585}} onClick={onMarkerClick} />
      <InfoWindow
          marker={markerState.activeMarker}
          visible={markerState.showingInfoWindow}>
            <div>
              <h4>{markerState.selectedPlace.name}</h4>
            </div>
        </InfoWindow>
      <Marker name={'Phillip Trujillo'} position = {{ lat: 43.6844986, lng: -116.2863588}} onClick={onMarkerClick} />
      <InfoWindow
          marker={markerState.activeMarker}
          visible={markerState.showingInfoWindow}>
            <div>
              <h4>{markerState.selectedPlace.name}</h4>
            </div>
        </InfoWindow>
      <Marker name={'Nick Rodgers'} position = {{ lat: 43.6129885, lng: -116.2001923}} onClick={onMarkerClick} />
      <InfoWindow
          marker={markerState.activeMarker}
          visible={markerState.showingInfoWindow}>
            <div>
              <h4>{markerState.selectedPlace.name}</h4>
            </div>
        </InfoWindow>

    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey:"AIzaSyAa_05unLMf5OQPJyPUwx8eo7rx01Njqsg"
})(GoogleMap);