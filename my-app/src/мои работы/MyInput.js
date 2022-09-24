import React from "react";
import MyButton from "./MyButton";
export default class MyInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: "",
            url: "",
            img: "",
            newImg: "",

        }
        this.handleChange = this.handleChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    handleChange(event) {
        event.preventDefault()
        this.setState({ img: event.target.value });
        this.setState({ newImg: "" });
    }
    onSubmit(event) {

        this.setState({
            url: this.state.img,
            newImg: ""
        })
        event.preventDefault()
    }

    error() {
        this.setState({ error: "Картинка не загружена" })
    }
    load() {
        this.setState({ error: "" })
    }
    onClick(e) {
        e.preventDefault();
        this.setState({})
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <img
                    onLoad={() => this.load()}
                    onError={() => this.error()}
                    src={this.props.src}

                />
                <ButtonL/>
                <ButtonR/>
            </div>
        )
    }
}
class ButtonL extends React.Component {
    constructor() {
        super();
        this.state = { value: 'pre' };
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
class ButtonR extends React.Component {
    constructor() {
        super();
        this.state = { value: 'next' };
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