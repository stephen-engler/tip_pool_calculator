import React, {Component} from 'react';
import EmployeeInput from './EmployeeInput';
import TotalTips from './TotalTips';
import EmployeeTable from './EmployeeTable'

const initalState = {
    totalTips: 0,
    employees: []
}

class Form extends Component {
  constructor() {
    super();
    this.state = initalState
  }

  handleChangeFor = (input) =>{
      return (event)=>{
          this.setState({
              [input]: event.target.value
          })
      }
  }
  addEmployee = (employee) =>{
      this.setState({
          ...this.state,
          employees: [...this.state.employees, employee]
      })
  }

  render() {
    return <div>
            <TotalTips totalTips={this.state.totalTips} handleChangeFor={this.handleChangeFor}/>
            <EmployeeTable employees={this.state.employees}/>
            <EmployeeInput addEmployee={this.addEmployee}/>
        </div>;
  }
}

export default Form;