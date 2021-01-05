import './App.css';
import React from 'react'

import ListingContainer from './Components/ListingContainer'
import NewListing from './Components/newListing';
import SearchForm from './Components/searchForm';
import MapPins from './Components/MapPins';
import Nav from './Components/Nav';
import About from './Components/About'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';




export class App extends React.Component {

    state = {
      api: [],
      searchValue: '',
      clicked: false,
      selectedHouse : false
    }

    componentDidMount() {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url = "http://localhost:3000/listings"; 

      fetch(url)
      .then(resp => resp.json())
      .then(listings => this.setState ({ api : listings}))
      // .catch(console.log)
        // console.log("Latitude is :", position.coords.latitude);
        // console.log("Longitude is :", position.coords.longitude);     
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

    addPinClicked = () => {
      this.setState(prevState => ({
          selectedHouse: !prevState.selectedHouse
      }))
  }
    
    
  render() {
    return (
      <div className="App">
          <img alt='logo' src='/images/logo.png'>
          </img>
          <Router>
            <Nav/>
              <Switch>
                <Route path='/about' exact  component={About}/>
                {/* <Route path='/' exact component={Home} /> */}
                <Route path='/' exact component={App}>
                  <SearchForm searchHandler={this.searchValue} changeHandler={this.searchHandler}/>
                  <ListingContainer removeListing={this.removeListing} search={this.state.searchValue} editSubmitHandler={this.editSubmitHandler} listings={this.state.api}/>
                  <NewListing submitHandler={this.submitHandler} />
                  <MapPins listings={this.state.api} selectedHouse={this.state.selectedHouse} clickHandler={this.addPinClicked}/>
                </Route>
              </Switch>
          </Router>
      </div>
    );
  }
}

export default App