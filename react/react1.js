
class SuperString extends React.Component{
    constructor(props){
        super(props);
        this.state={text:props.message};
        this.click=this.click.bind(this);
    }
    click(){
        this.setState(state=>({
            text : state.text +'!'

        }))

    }
    render(){
        return <p onClick={this.click}>{this.state.text}</p> ;
    }

}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
        <SuperString message="hello"/>
        <SuperString message="Nadin"/>
        <SuperString message="Good"/>
        <SuperString message="day"/>
        <SuperString message="for you"/>
    </React.Fragment>
)