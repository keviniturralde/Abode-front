import React from 'react'
import ListingCard from './ListingCard'

class ListingContainer extends React.Component {

    renderListings = () => {
        // let filteredArray = this.props.movies.filter(el => el.title.includes(this.props.search))
        // return filteredArray.map(movieObj => <Movie clickHandler={this.props.clickHandler} key={movieObj.id} movie={movieObj}/>)
        let filteredArray = this.props.listings.filter(el => el.address.includes(this.props.search))
        console.log(filteredArray)
        return filteredArray.map(listingObj => <ListingCard key={listingObj.id} appClickHandler={this.props.appClickHandler} editSubmitHandler={this.props.editSubmitHandler} listing={listingObj}/>)
        
    }
    render() {
      return (
        <ul className="cards">
        {this.renderListings()}
      </ul>
    )
    
    };
  
  }
  
  
  
  
  export default ListingContainer;
  