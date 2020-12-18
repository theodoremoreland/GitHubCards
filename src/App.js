import React from 'react';

import './App.css';
import Form from './components/Form/Form.js';
import CardList from './components/CardList/CardList.js';

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
      <>
        <div className="header">
          GitHub Cards
        </div>
        <div>
          <Form onSubmit={this.addNewProfile}/>
        </div>
        <div>
          <CardList cards={this.state.cards}/>
        </div>
      </>
    )
  };
}

export default App;