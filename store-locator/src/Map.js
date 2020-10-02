import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './Map.css'
const mapStyles = {
    width: '100%',
    height: '100%'
};

export class MapContainer extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={
                    {
                        lat: 23.0225,
                        lng: 72.5714
                    }
                }
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyCN0Sg-Nary4fW_zRV7KLoUojCPGOVM9rU"
})(MapContainer);