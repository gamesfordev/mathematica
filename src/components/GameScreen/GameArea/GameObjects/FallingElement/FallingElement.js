import React, { Component } from 'react';

class FallingElement extends Component {
  render() {
    return (
      <div className="FallingElement">
        {Math.random()}
      </div>
    );
  }
}

export default FallingElement;
