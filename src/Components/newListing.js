import React from 'react'
import  '../App.css';



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

          <form className="new-listing-form" onSubmit={this.submitHandler}>
            <h2>New Listing </h2>
            <div class='form-row'>
              <div class='form-group'>
                {/* <label for='input-image'> Image </label> */}
                  <input style={{borderRadius: '5px'}} placeholder='image'name="image" border-radius={10} row={20} value={this.state.image} onChange={this.changeHandeler} />
              </div>
              <div class='form-group col-md-8'>
                  {/* <label for='zipcode'> Zipcode </label> */}
                  <input style={{borderRadius: '5px'}} placeholder='zip code' name="zip code" value={this.state.zip_code} onChange={this.changeHandeler}/>
              </div>
            </div>
              <div class='form-group'>
                  {/* <label for='inputaddress'> Address </label> */}
                  <input style={{borderRadius: '5px'}}placeholder='1234 Main St'name="address" row={20} value={this.state.address} onChange={this.changeHandeler} />
              </div>
              <div class='form-group '>
                  {/* <label for='inputdescription'> Description </label> */}
                  <textarea style={{borderRadius: '5px'}} placeholder='description'name="description" row={20} value={this.state.description} onChange={this.changeHandeler} />
              </div>
              <div class='form-row'>
              <div class='form-group col-md-2'>
                {/* <label for='input-longitude'> Longitude </label> */}
                  <input style={{borderRadius: '5px'}} placeholder='longitude'name="longitude" row={20} value={this.state.longitude} onChange={this.changeHandeler} />
              </div>
              <div class='form-group col-md-2'>
                  {/* <label for='input-latitude'> Latitude </label> */}
                  <input style={{borderRadius: '5px'}} placeholder='latitude'name="latitude" row={20} value={this.state.latitude} onChange={this.changeHandeler} />
              </div>
                  {/* <label for='input-fav'> favorite </label> */}
                  <input style={{borderRadius: '5px'}} placeholder='favorite'name="favorite" row={10} value={this.state.favorite} onChange={this.changeHandeler} />
            </div>
                  <button type="submit" class="btn btn-primary"> Add Listing!</button>

          </form>
    )
    
    };
  
  }

//   <div class="form-group">
//     <label for="inputAddress">Address</label>
//     <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
//   </div>
//   <div class="form-group">
//     <label for="inputAddress2">Address 2</label>
//     <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
//   </div>
//   <div class="form-row">
//     <div class="form-group col-md-6">
//       <label for="inputCity">City</label>
//       <input type="text" class="form-control" id="inputCity">
//     </div>
//     <div class="form-group col-md-4">
//       <label for="inputState">State</label>
//       <select id="inputState" class="form-control">
//         <option selected>Choose...</option>
//         <option>...</option>
//       </select>
//     </div>
//     <div class="form-group col-md-2">
//       <label for="inputZip">Zip</label>
//       <input type="text" class="form-control" id="inputZip">
//     </div>
//   </div>
//   <div class="form-group">
//     <div class="form-check">
//       <input class="form-check-input" type="checkbox" id="gridCheck">
//       <label class="form-check-label" for="gridCheck">
//         Check me out
//       </label>
//     </div>
//   </div>
//   <button type="submit" class="btn btn-primary">Sign in</button>
// </form>
  
  

    export default NewListing