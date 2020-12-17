import React from 'react'
import ListingCard from './ListingCard'

class ListingContainer extends React.Component {

    renderListings = () => {
        return this.props.listings.map(listingObj => <ListingCard key={listingObj.id} appClickHandler={this.props.appClickHandler} editSubmitHandler={this.props.editSubmitHandler} listing={listingObj}/>)
        
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
  