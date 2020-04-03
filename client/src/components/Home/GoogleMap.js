import React, {useState} from 'react';
import axios from "axios";
import { Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';

const GoogleMap = props => {
  const {tasks} = props;

  const [positions, setPositions] = React.useState([])
  console.log("GoogleMap function:", tasks);
  const mapStyles = {
    width: '100%',
    height: '100%'
  };

  /*global google*/ // To disable any eslint 'google not defined' errors
  const geocoder = new google.maps.Geocoder();

  const geocodeAddress = (address) => {
    geocoder.geocode({'address': address}, function(results, status){
      if (status === 'OK') {
        let lat = results[0].geometry.location.lat()
        let lng = results[0].geometry.location.lng()
        return ({lat: lat, lng: lng})
      }else {
        console.log("Geocode was not successful for the following reason: " + status)
      }
    })
  }

  // setPositions(geocodeAddress(`${tasks[0].streetLine1 + "," + tasks[0].location.city + "," + tasks[0].location.state}`));
  // console.log(positions);
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
      containerStyle={{ width: '73vw', height: '80vh' }}
      >
      {/* <Marker position = {{lat: positions.lat, lng: positions.lng}} /> */}

      {/* <Marker position = {{lat: 43.6538708, lng: -116.1724573}} />
        <Marker position = {{lat: 43.6150186, lng: -116.2023137}} /> */}

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
