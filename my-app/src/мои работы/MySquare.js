import { Component } from "react";
export default class MySquare extends Component {
    constructor(props) {
        super(props);
        this.state = {
            y: 0,
            x: 0,
        }
        this.moveElement = this.moveElement.bind(this);
    }
    moveElement(deltaX, deltaY) {
        this.setState(this.state = (
            {
                x: this.state.x + deltaX,
                y: this.state.y + deltaY,
            }
        )
        )
    }
    render() {
        return (
            <div id='myDiv' style={{ left: this.state.x, top: this.state.y }}>
                <button onClick={() => this.moveElement(0, -15)}>Up</button>
                <button onClick={() => this.moveElement(0, 15)}>Down</button>
                <button onClick={() => this.moveElement(-15, 0)}>Left</button>
                <button onClick={() => this.moveElement(15, 0)}>Right</button>
            </div>
        )
    }
}
