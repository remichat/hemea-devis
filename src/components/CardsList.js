import React, { Component } from 'react';

import Card from './Card';

class CardsList extends Component {
  render() {
    return(
      <div>
        {this.props.cardsInfos.map(cardInfo => <Card key={cardInfo.label} details={cardInfo} />)}
      </div>
    )
  }

}

export default CardsList;
