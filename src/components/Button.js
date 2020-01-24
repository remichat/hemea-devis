import React, { Component } from 'react';

class Button extends Component {
  render() {
    return(<div className="btn btn-light" onClick={this.props.switchView}>Changer de vue</div>)
  }

}

export default Button;
