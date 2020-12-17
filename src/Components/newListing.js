import React from 'react'

class NewListing extends React.Component {
    state = {
       image: '',
       zip_code: null,
       address: '',
       description: '',
       longitude: '',
       latitude: '',
       favorite: ''
    }
    changeHandeler = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }
    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
    }
    render() {
        return (
          <ul className="cards">
          <form className="new-listing-form" onSubmit={this.submitHandler}>
                  <input placeholder='image'name="image" row={20} value={this.state.image} onChange={this.changeHandeler} />
                  <input placeholder='zip code' name="zip code" value={this.state.zip_code} onChange={this.changeHandeler}/>
                  <input placeholder='address'name="address" row={20} value={this.state.address} onChange={this.changeHandeler} />
                  <input placeholder='description'name="description" row={20} value={this.state.description} onChange={this.changeHandeler} />
                  <input placeholder='longitude'name="longitude" row={20} value={this.state.longitude} onChange={this.changeHandeler} />
                  <input placeholder='latitude'name="latitude" row={20} value={this.state.latitude} onChange={this.changeHandeler} />
                  <input placeholder='favorite'name="favorite" row={20} value={this.state.favorite} onChange={this.changeHandeler} />

                  <button >Submit review</button>
          </form>
          </ul>
    )
    
    };
  
  }
  

    export default NewListing