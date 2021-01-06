import React from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow  } from 'google-maps-react';


const mapStyles = {
    width: '60%',
    height: '60%'
  };

  class MapPins extends React.Component {

    state = {
        selectedHouse : false

    }
    addPinClicked = () => {
        this.setState(prevState => ({
            selectedHouse: !prevState.selectedHouse
        }))
    }
      
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
                    {this.props.listings.map(listingObj => (
                        <Marker key={listingObj.id} 
                        position={{
                            lat: listingObj.latitude,
                            lng: listingObj.longitude
                        }} 
                        onClick={() => {
                            this.setState({ selectedHouse: listingObj})
                        // console.log(this.state.selectedHouse.latitude)
                        }} 
                        icon={{
                            url: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/house_1f3e0.png',
                            scaledSize: new window.google.maps.Size(25, 25)
                        }}
                        
                        />
                        ))}
                    { this.state.selectedHouse && (
                    <InfoWindow
                    visible={true}
                    position= {{
                        lat: parseFloat(this.state.selectedHouse.latitude),
                        lng: parseFloat(this.state.selectedHouse.longitude)
                    }} >
                        <div>
                           <h3>{this.state.selectedHouse.address}</h3>
                           <img src={this.state.selectedHouse.image} height="300" width="500"/>
                        </div>
                    </InfoWindow>
                    )}

           </Map>
        )
    }

}

export default GoogleApiWrapper({
    apiKey: "AIzaSyB1WaSwbKiBYBb9IVms_ssjNH8QjqnaaDs"
    })(MapPins)