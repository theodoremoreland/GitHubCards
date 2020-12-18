// React
import React from 'react';

// Other
import axios from 'axios';

// Semantic UI
import { Input } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';

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
            <Input type="text"
             value={this.state.userNameInput}
             onChange={event => this.setState( {userNameInput: event.target.value } )} 
             required 
             placeholder="GitHub Username"/>
            <Button secondary>Add Card</Button>
        </form>
      )
    }
};

export default Form;