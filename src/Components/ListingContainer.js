import React from 'react'
import ListingCard from './ListingCard'

class ListingContainer extends React.Component {

    renderListings = () => {
    
        let filteredArray = this.props.listings.filter(el => el.address.includes(this.props.search))
        // console.log(filteredArray)
        return filteredArray.map(listingObj => <ListingCard key={listingObj.id} appClickHandler={this.props.appClickHandler} removeListing={this.props.removeListing} editSubmitHandler={this.props.editSubmitHandler} listing={listingObj}/>)
        
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
  