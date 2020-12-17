import './App.css';
import React from 'react'
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';
import ListingContainer from './Components/ListingContainer'
import NewListing from './Components/newListing';
import SearchForm from './Components/searchForm';


const mapStyles = {
  width: '50%',
  height: '50%'
};

export class App extends React.Component {

    state = {
      api: [],
      searchValue: '',
      clicked: false
    }

    componentDidMount() {
      fetch('http://localhost:3000/listings')
      .then(resp => resp.json())
      .then(listings => this.setState ({ api : listings}))
      // .catch(console.log)
      navigator.geolocation.getCurrentPosition(function(position) {
        // console.log("Latitude is :", position.coords.latitude);
        // console.log("Longitude is :", position.coords.longitude);     
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
      // .catch(console.log)
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
        // .catch(console.log)
    };

    removeListing = ( listingId) => {
      console.log( listingId)

      fetch(`http://localhost:3000/listings/${listingId}`, {
        method: "DELETE",
      })  
      .then(resp => resp.json())
      .then(()=> {
        let foundObj= this.state.api.find(listingObj => listingObj.id === listingId)
        let listingsCopy = [...this.state.api]
        let index = listingsCopy.indexOf(foundObj)
        listingsCopy.splice(index, 1)
        this.setState({ api: listingsCopy})
        console.log(listingsCopy)
      })
      .catch(console.log)
    };

    searchHandler = (e) => {
      this.setState ({ searchValue: e.target.value})
    }
    

  render() {
    return (
      <div className="App">
        <p>
          <header> ABODE </header>
          <SearchForm searchHandler={this.searchValue} changeHandler={this.searchHandler}/>
          <ListingContainer removeListing={this.removeListing} removeListing={this.removeListing} search={this.state.searchValue} editSubmitHandler={this.editSubmitHandler} listings={this.state.api}/>
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