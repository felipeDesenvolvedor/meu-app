import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {count:this.props.count};
        this.add = this.add.bind(this);
    }

    add() {
        this.setState((state) => {
            return {count: state.count + 1}
        })
    }

    componentDidMount() {
        
    }

    render() {
        this.title = document.querySelectorAll('.title');
        this.title = [...this.title];

        return(
            <di>
                {this.title.map(item =>{item.innerHTML = this.state.count+"Teste"})}
                <button onClick={this.add}>Add</button>
            </di>
        );
    }
}

export default Counter;