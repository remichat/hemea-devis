import React, { Component } from 'react';

import CardRow from './CardRow'

class Card extends Component {
  render() {
    const {label, prixTotalHT, lignes} = this.props.details;
    return(
      <div className="border border-dark rounded p-3 mb-3">
        <div className="d-flex justify-content-between">
          <h4>{label}</h4>
          <h4 className="font-weight-bold">{`${prixTotalHT} € HT`}</h4>
        </div>
        <div className="my-3">
          <div className="row border-bottom mb-3">
            <div className="col-6 text-secondary">Désignation</div>
            <div className="col-6">
              <div className="row">
                <div className="col-4 text-right text-secondary">Prix unitaire HT</div>
                <div className="col-4 text-right text-secondary">Quantité</div>
                <div className="col-4 text-right text-secondary">Prix HT</div>
              </div>
            </div>
          </div>

          {lignes.map(ligne => <CardRow key={ligne.designation} details={ligne}/>)}

        </div>
      </div>
    )
  }

}

export default Card;
