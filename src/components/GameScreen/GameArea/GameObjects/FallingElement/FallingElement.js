import React, { Component } from 'react';
import './FallingElement.css';

class FallingElement extends Component {

    lifeTime = null;
    lifeLoop = null;
    leftPos = parseInt(Math.random() * 10000) % 90;
    topPos = 0;

    componentWillMount() {
        this.setState({
            left : this.leftPos + '%',
            top : this.topPos + 'px'
        });
        this.lifeTime = setTimeout(() => {
            this.props.removeElement(this.props.id);
        }, 10000);

        this.lifeLoop = setInterval(() => {
            this.topPos += 5;
            this.setState({
                left : this.leftPos + '%',
                top : (this.topPos) + 'px'
            });
        }, 100);
    }

    componentWillUnmount() {
        clearTimeout(this.lifeTime);
        clearInterval(this.lifeLoop);
    }

    render() {
        return (
            <div className="FallingElement" style={this.state}>
                {this.props.challenge}
            </div>
        );
    }
}

export default FallingElement;
