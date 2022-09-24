import {Component} from "react";
export default class MyButton extends Component {
    constructor() {
        super();
        this.state = { value: 0 };
        this.click = this.click.bind(this);
    }
    click() {
        this.setState({ value: ++this.state.value });

    }
    render() {
        return (
            <button
                onClick={this.click}
            >
                {this.state.value}
            </button>

        )
    }
}