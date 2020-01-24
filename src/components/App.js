import React, { Component } from 'react';
import '../css/App.css';
import { transposeLotsToLocations } from '../helpers'

class App extends Component {
  state = {
    title: "",
    address: "",
    cardsInfos: [],
    lots: [],
    locations: [],
    isViewLots: true
  };

  componentDidMount = async () => {
    const data = await this.fetchAPIdata();

    const { address, postalCode, city } = data.deal.chantierAddress;

    this.setState({
      title: data.title,
      address: `${address} ${postalCode} ${city}`,
      cardsInfos: data.lots,
      lots: data.lots,
      locations: transposeLotsToLocations(data.locations, data.lots)
    })
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
      <div className="App">
        Hello
      </div>
    );
  }
}

export default App;



