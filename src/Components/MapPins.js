import React from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow  } from 'google-maps-react';


const mapStyles = {
    width: '50%',
    height: '50%'
  };

class MapPins extends React.Component {

    render(){
        return (
            <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{
              lat: 40.7699456,
              lng: -73.7345536
            }}
            >
                {this.props.lisitngs.map((listingObj) => (
                    <Marker key={listingObj.id} 
                    position={{
                        lat: listingObj.latitude,
                        lng: listingObj.longitude
                    }}
                    onClick={() => {
                        this.props.selectedPark(listingObj)
                    }}
                   />
                ))}
                {this.props.selectedPark && (
                    <InfoWindow
                        position={{
                        lat: this.props.listingObj.latitude,
                        lng: this.props.listingObj.longitude
                    }}
                    >
                        <div>House Details </div>
                    </InfoWindow>
                )}
           </Map>
        )
    }

}

export default GoogleApiWrapper({
    apiKey: "AIzaSyB1WaSwbKiBYBb9IVms_ssjNH8QjqnaaDs"
    })(MapPins)