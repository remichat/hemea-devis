import React, { Component } from 'react';

class CardRow extends Component {
  render() {
    const {designation, prixHT, prixUnitaireHT, quantite} = this.props.details;
    return(
      <div className="row mt-1">
        <div className="col-6">{designation}</div>
        <div className="col-6">
          <div className="row">
            <div className="col-4 text-right">{`${prixUnitaireHT} €`}</div>
            <div className="col-4 text-right">{quantite}</div>
            <div className="col-4 text-right">{`${prixHT} €`}</div>
          </div>
        </div>
      </div>
    )
  }

}

export default CardRow;
