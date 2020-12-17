
import React from 'react';

class EditForm extends React.Component {

    state = {
        name: this.props.listing.name
    };

    changeHandler = (e) => {
        e.persist();
        this.setState(() => ({ name: e.target.value }));
    };

    localSubmitHandler = (e) => {
        e.preventDefault();
        this.props.submitHandler(this.state.name, this.props.listing.id);
        this.props.listingSubmitHandler();

    };
    render() {
        return (
            <form onSubmit={this.localSubmitHandler}>
                <input type="text" value={this.state.name} onChange={this.changeHandler} />
                <button>Edit</button>
            </form>
        )
    };
};

export default EditForm;