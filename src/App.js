import './App.css';
import React from 'react'
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';
import ListingContainer from './Components/ListingContainer'
import NewListing from './Components/newListing';

const mapStyles = {
  width: '50%',
  height: '50%'
};

export class App extends React.Component {

    state = {
      api: []
    }

    componentDidMount() {
      fetch('http://localhost:3000/listings')
      .then(resp => resp.json())
      .then(listings => this.setState ({ api : listings}))
      // .catch(console.log)
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);     
      });
    }
    submitHandler = (listingObj) => {
      fetch('http://localhost:3000/listings', {
        method: 'POST',
        headers: {'Content-Type': "application/json", "Accepts": "application/json"
        },
        body: JSON.stringify(listingObj)
      })
      .then(response => response.json())
      .then(newListing => this.setState ({api: [...this.state.api, newListing]}))
      .catch(console.log)
    }
    editSubmitHandler = (address, listingId) => {
      console.log(address, listingId)
  
      fetch(`http://localhost:3000/listings/${listingId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accepts": "application/json"
        },
        body: JSON.stringify({ address })
      })
        .then(resp => resp.json())
        .then(newlisting => {
          // find the object in state
          let copiedArray = [...this.state.api]
          let oldlisting = copiedArray.find(listing => listing.id === newlisting.id)
          let idx = copiedArray.findIndex(listing => listing.id === newlisting.id)
          copiedArray[idx] = newlisting;
          this.setState({ api: copiedArray });
        })
        .catch(console.log)
    };
    

  render() {
    return (
      <div className="App">
        <p>
          <header> ABODE </header>
          <ListingContainer editSubmitHandler={this.editSubmitHandler} listings={this.state.api}/>
          <NewListing submitHandler={this.submitHandler} />
           <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: 40.7699456,
            lng: -73.7345536
          }}
          >
          <Marker
           onClick={this.onMarkerClick}
           name={'This is test name'}
         />
         </Map>
        </p>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB1WaSwbKiBYBb9IVms_ssjNH8QjqnaaDs"
  })(App)