import React from 'react';
import axios from 'axios';

class Form extends React.Component {

    state = {
        userNameInput: ""
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.get(`https://api.github.com/users/${this.state.userNameInput}`);
        this.props.onSubmit(response.data);
        this.setState( {userNameInput: ""} );
    };

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <input type="text"
             value={this.state.userNameInput}
             onChange={event => this.setState( {userNameInput: event.target.value } )} 
             required 
             placeholder="GitHub Username"/>
            <button>Add Card</button>
        </form>
      )
    }
}

export default Form;