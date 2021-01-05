import React from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow  } from 'google-maps-react';


const mapStyles = {
    width: '75%',
    height: '75%%'
  };

  class MapPins extends React.Component {
      
      render(){
          const {selectedHouse} = this.props
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
                            this.props.clickHandler()
                        }} 
                        icon={{
                            url: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/house_1f3e0.png',
                            scaledSize: new window.google.maps.Size(25, 25)
                        }}
                        
                        />
                        ))}
                    { selectedHouse && (
                    <InfoWindow
                    position= {{
                        lat: parseInt(this.props.listings[0].latitude),
                        lng: parseInt(this.props.listings[0].longitude)
                    }}>
                        <div>
                            {this.props.listings[0].image}
                        </div>
                    {console.log(this.props.listings[0].image)}
                    {console.log(selectedHouse)}

                    </InfoWindow>
                    )}

           </Map>
        )
    }

}

export default GoogleApiWrapper({
    apiKey: "AIzaSyB1WaSwbKiBYBb9IVms_ssjNH8QjqnaaDs"
    })(MapPins)