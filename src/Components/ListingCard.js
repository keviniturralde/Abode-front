import React from 'react' 
import EditForm from './EditForm';

class ListingCard extends React.Component {
    // com = (this.props.listing.reviews.forEach(element => {
    //     console.log(element.comment)
    // }))
    state = {
        showEdit: false
    }
    clickHandler = () => {
        if (this.state.clicked) {
          this.props.appClickHandler()
        }
        this.setState({ clicked: !this.state.clicked });
      };
      listingSubmitHandler = () => {
        this.setState({ showEditForm: false });
      };
    render() {
        const {listing} = this.props
        return(
        <div className="card">

            <h1>{this.props.listing.address}</h1>
            <img src={this.props.listing.image} alt={this.props.listing.address}></img>
            <button onClick={() => this.props.removeListing(this.props.listing.id)}>Delete</button><></>
            <span>{this.state.showEdit? 
            <EditForm listing={listing} submitHandler={this.props.editSubmitHandler} listingSubmitHandler={this.listingSubmitHandler} />
            :
            <h2 onClick={() => this.setState({ showEdit: true })}>{listing.description}</h2>}
          <img alt="house" src={listing.imgage} /></span> 
        <>Your Comments: 
        {(this.props.listing['reviews'].map(element => {
        return <li>{element.comment }</li> 
    }))}</>
        </div>
        )
    }
}

export default ListingCard