import React, {Component} from 'react';

const initialState = {
    name: '',
    hours: undefined,
    percent: 100,
    amount: '',
}

class EmployeeInput extends Component{
    state = initialState;

    handleChangeFor = input =>{
        return event=>{
            this.setState({
                ...this.state,
                [input]: event.target.value
            })
        }
    }

    handleClick = () =>{
        this.props.addEmployee(this.state)
        this.setState({
            initialState
        })
    }

    render(){
        return <div>
            <input type='text' value={this.state.name} onChange={this.handleChangeFor('name')}/>
            <input type='number' value={this.state.hours} onChange={this.handleChangeFor('hours')}/>
            <input type='number'value={this.state.percent} onChange={this.handleChangeFor('percent')}/>
            <button onClick={this.handleClick}>Add</button>
        </div>;
    }
}

export default EmployeeInput;