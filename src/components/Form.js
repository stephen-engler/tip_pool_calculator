import React, {Component} from 'react';
import EmployeeInput from './EmployeeInput';
import TotalTips from './TotalTips';
import EmployeeTable from './EmployeeTable'

const initalState = {
    totalTips: 0,
    employees: [],
    totalHours: 0,
    payPerHour: 0
}

class Form extends Component {
  constructor() {
    super();
    this.state = initalState
  }

  handleChangeFor = (input) =>{
      return (event)=>{
          this.setState({
              [input]: parseInt(event.target.value)
          })
      }
  }
  addEmployee = (employee) =>{
      this.setState({
          ...this.state,
          employees: [...this.state.employees, employee]
      })
      console.log('state ', this.state)
  }
  calculate = () =>{
      let totalHours = this.state.employees.reduce((totalHours, employee)=>{
          return totalHours + parseInt(employee.hours)
      }, 0)
      
      let payPerHour = totalTips/totalHours;

      this.setState({
          ...this.state,
          totalHours: totalHours,
          payPerHour: payPerHour
      })
    //   let calculatedState = this.state;
    //   let updatedEmployees = this.state.employees.map(employee=>{
    //       return 
    //   })
        console.log('state ', this.state)
  }

  render() {
    return <div>
            <TotalTips totalTips={this.state.totalTips} handleChangeFor={this.handleChangeFor} calculate={this.calculate}/>
            <EmployeeTable employees={this.state.employees}/>
            <EmployeeInput addEmployee={this.addEmployee}/>
        </div>;
  }
}

export default Form;