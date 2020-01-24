import React from 'react';

import Card from './Card';

const CardsList = (props) => {
  return(
    <div>
      {props.cardsInfos.map(cardInfo => <Card key={cardInfo.label} details={cardInfo} />)}
    </div>
  )
}

export default CardsList;
