import React, { Component } from 'react';

class FallingElement extends Component {

    lifeTime = null;

    componentWillMount() {
        this.lifeTime = setTimeout(() => {
            this.props.removeElement(this.props.id);
        }, 10000);
    }

    componentWillUnmount() {
        clearTimeout(this.lifeTime);
    }

    render() {
        return (
            <div className="FallingElement">
                {this.props.challenge}
            </div>
        );
    }
}

export default FallingElement;
