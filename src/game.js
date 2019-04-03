import React, { Component } from 'react';
import './App.css';

class Game extends Component {
    constructor(props) {
        super(props);
        this.currentInterval = null;
        this.fallenLegoEl = null;
        this.state = {
            Xpos: 0,
            Ypos: 0,
            directionX: 'r',
            currentHight_tower: 0
        }
    }

    activateLego = (event) => {
        if (this.currentInterval)
            clearInterval(this.currentInterval);
        let d = event.target.getAttribute('name')
        this.currentInterval = setInterval(this[`LegoMovmentTo${d}`], 25);
    }

    LegoMovmentToY = () => {
        if (this.state.Ypos + 200 !== window.screen.height - this.state.currentHight_tower){
            let newYpos=this.state.Ypos+10;
            this.setState({ Ypos: newYpos });
            this.fallenLegoEl.style.marginTop = `${newYpos}px`;
        }
        else{
            clearInterval(this.currentInterval);
            this.setState({currentHight_tower:200})
        }
    }

    LegoMovmentToX = () => {
        let currLego = this.fallenLegoEl;
        if (this.state.Xpos + 200 === window.screen.width)
            this.setState({ directionX: 'l' })
        if (this.state.Xpos === 0)
            this.setState({ directionX: 'r' })

        let addition = (this.state.directionX === 'r') ? 10 : -10;
        let newXpos = this.state.Xpos + addition;
        this.setState({ Xpos: newXpos });
        currLego.style.marginLeft = `${newXpos}px`;
    }
    render() {
        console.log('window.screen',window.screen)
        return (
            <div className="board" >
                <button onClick={this.activateLego} name='Y'>drop</button>
                <button onClick={this.activateLego} name="X" >start game:)</button>
                <div ref={el => this.fallenLegoEl = el}
                    id="currlogo" >
                </div>
            </div>
        );
    }
}

export default Game;