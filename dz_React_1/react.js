'use strict';

// const e = React.createElement;


class root extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num: 0 };
  }
summ=()=>this.setState(state=>({num: state.num +1}))
  
render() {
  <button onClick={this.summ}>
 click's button: {this.state.num}
</button>
  }
}

const domContainer = document.querySelector('root');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));