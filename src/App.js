// React
import React from 'react';

// Semantic UI
import { Container, Card } from 'semantic-ui-react';

// Custom components
import Form from './components/Form/Form.js';
import CardList from './components/CardList/CardList.js';

// Custom styles
import './App.css';

class App extends React.Component {
  state = {
      cards: []
  };

  addNewProfile = (newProfile) => {
    this.setState(prevState => ({
      cards: [...prevState.cards, newProfile]
      })
    );
  };

  render() {
    return (
      <Container className="app">
        <div>
          <Form onSubmit={this.addNewProfile}/>
        </div>
        <Card.Group className="cardGroup">
          <CardList cards={this.state.cards}/>
        </Card.Group>
      </Container>
    )
  };
}

export default App;