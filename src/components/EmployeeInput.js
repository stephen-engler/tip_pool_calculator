import React, {Component} from 'react';

const initialState = {
    employeeName: '',
    employeeHours: undefined,
    employeePercent: 100,
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

    render(){
        return <div>
            <input type='text' value={this.state.employeeName} onChange={this.handleChangeFor('employeeName')}/>
            <input type='number' value={this.state.employeeHours} onChange={this.handleChangeFor('employeeHours')}/>
            <input type='number'value={this.state.employeePercent} onChange={this.handleChangeFor('employeePercent')}/>
        </div>;
    }
}

export default EmployeeInput;