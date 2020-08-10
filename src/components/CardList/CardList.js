// Third party
import React from 'react';

// Custom
import Card from '../Card.js';

const CardList = (props) => props.cards.map((card) => <Card key={card.id} {...card} alt=""/>);

export default CardList;