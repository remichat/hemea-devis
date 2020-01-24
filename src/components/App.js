import React, { Component } from 'react';
import '../css/App.css';

import Button from './Button';
import CardsList from './CardsList';
import Total from './Total';
import { transposeLotsToLocations } from '../helpers';

class App extends Component {
  state = {
    title: "",
    address: "",
    cardsInfos: [],
    lots: [],
    locations: [],
    totalHT: 0,
    totalTTC: 0,
    totalTVA: 0,
    isViewLots: true
  };

  componentDidMount = async () => {
    const data = await this.fetchAPIdata();

    const { address, postalCode, city } = data.deal.chantierAddress;
    console.log(data);
    this.setState({
      title: data.title,
      address: `${address} ${postalCode} ${city}`,
      cardsInfos: data.lots,
      lots: data.lots,
      locations: transposeLotsToLocations(data.locations, data.lots),
      totalHT: parseInt(data.prixTotalHT),
      totalTTC: parseInt(data.prixTotalTTC),
      totalTVA: parseInt(data.montantsTVA[0].montant)
    })
  }

  switchView = () => {
    if(this.state.isViewLots) {
      this.setState({cardsInfos: this.state.locations, isViewLots: false})
    } else {
      this.setState({cardsInfos: this.state.lots, isViewLots: true})
    }
  }

  fetchAPIdata = () => {
    const url = 'https://api.travauxlib.com/api/devis-pro/JKusHl8Ba8MABIjdCtLZOe2lxxnUfX'
    const data = fetch(url)
            .then(response => response.json())
            .then((data) => {
              return data;
            })

    return data;
  }

  render() {
    return (
      <div className="container my-4">
        <div className="row">
          <div className="col-12">

            <div className="text-center my-4">
              <h3>{this.state.title}</h3>
              <h4>{this.state.address}</h4>
            </div>

            <div className="d-flex justify-content-between my-3">
              <h2 className="m-0">Détails de la prestation</h2>
              <Button switchView={this.switchView}/>
            </div>

            <CardsList cardsInfos={this.state.cardsInfos}/>

            <Total totalHT={this.state.totalHT} totalTTC={this.state.totalTTC} totalTVA={this.state.totalTVA}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;



