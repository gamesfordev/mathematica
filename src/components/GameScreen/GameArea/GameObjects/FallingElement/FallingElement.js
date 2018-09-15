import React, { Component } from 'react';
import './FallingElement.css';

class FallingElement extends Component {

    lifeTime = null;
    lifeLoop = null;
    leftPos = parseInt(Math.random() * 10000) % 90;
    topPos = -70;
    opacity = 1;

    componentDidMount() {
        this.setState({
            left : this.leftPos + '%',
            top : this.topPos + 'px',
            opacity : this.opacity
        });
        this.lifeTime = setTimeout(() => {
            this.props.removeElement(this.props.id);
        }, 12000);

        this.lifeLoop = setInterval(() => {
            this.topPos += 2;
            let hs = document.getElementById('gameView').clientHeight;
            if(this.topPos >= hs - (hs * 0.2))
                this.opacity -= 0.1;
            this.setState({
                left : this.leftPos + '%',
                top : (this.topPos) + 'px',
                opacity : this.opacity
            });
        }, 40);
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
