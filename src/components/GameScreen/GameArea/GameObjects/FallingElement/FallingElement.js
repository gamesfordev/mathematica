import React, { Component } from 'react';

class FallingElement extends Component {
  render() {
    return (
      <div className="FallingElement">
        {this.props.challenge}
      </div>
    );
  }
}

export default FallingElement;
