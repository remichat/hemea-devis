import React from 'react';

const Total = (props) => {
  return(
    <div>
      <div className="d-flex justify-content-between px-3">
        <h4>Total HT</h4>
        <h4>{`${props.totalHT} €`}</h4>
      </div>
      <div className="d-flex justify-content-between px-3">
        <h4>Total TVA</h4>
        <h4>{`${props.totalTVA} €`}</h4>
      </div>
      <div className="d-flex justify-content-between bg-info text-white px-3">
        <h3 className="font-weight-bold">Total TTC</h3>
        <h3 className="font-weight-bold">{`${props.totalTTC} €`}</h3>
      </div>
    </div>
  )
}

export default Total;
