import React from 'react';

const CardRow = (props) => {
  const {designation, prixHT, prixUnitaireHT, quantite} = props.details;

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

export default CardRow;
