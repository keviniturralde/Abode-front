import React from 'react';
import '../App.css';
import { MDBCol, MDBIcon } from "mdbreact";


const SearchForm = ({ searchValue, changeHandler }) => {
    return (
        <MDBCol md="6">
        <form className="form-inline mt-4 mb-4">  
            <MDBIcon icon="search" />
            <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" value={searchValue} onChange={changeHandler}/>
        </form>
        </MDBCol>
    
    )
}


export default SearchForm;