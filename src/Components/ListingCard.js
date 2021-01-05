import React from 'react' 
import EditForm from './EditForm';
import'bootstrap/dist/css/bootstrap.min.css';
import { Row, Card, Button, ListGroup} from 'react-bootstrap';
// import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

 

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
        <Card className='h-100 shadow-sm bg-grey rounded'>
                <Card.Img variant="thumbnail img-responsive" src={listing.image} height="300" width="500" alt={listing.address} />
                        <Card.Title className='mb-0 font-weight-bold'>{listing.address}</Card.Title> 
                    <Card.Body className='d-flex flex-column' >
                        <div className='d-flex mb-2 justify-content-between'>
                        <span>{this.state.showEdit? 
                         <EditForm listing={listing} submitHandler={this.props.editSubmitHandler} listingSubmitHandler={this.listingSubmitHandler} />
                         :
                         <Card.Text className='text-secondary' onClick={() => this.setState({ showEdit: true })}>{listing.description}</Card.Text>}
                     <img src={listing.imgage} /></span> 
                        </div>
                    </Card.Body>
                      <ListGroup.Item varient='flush'>
                         {(listing['reviews'].map(element => {
                             return <Row className='justify-content-md-cente' >
                           Rating: {element.rating} <>
                           </>
                           Comment: {element.comment}
                          </Row> 
                        }))}
                      </ListGroup.Item>
    <Button variant="primary" onClick={() => this.props.removeListing(listing.id)}> Delete Listing 🏠 </Button>
        </Card>
        )
    }
}

export default ListingCard