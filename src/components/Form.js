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
  //adds employee to array
  addEmployee = (employee) =>{
      this.setState({
          ...this.state,
          employees: [...this.state.employees, employee]
      })
  }
  //calculates tips for each employee based on total hours and total tips
  calculate = () =>{
      //adds up all hours from employee array
      let totalHours = this.state.employees.reduce((totalHours, employee)=>{
          return totalHours + parseInt(employee.hours)
      }, 0)
      //divides total tips by hours to get the pay per hour
      let payPerHour = this.state.totalTips/totalHours;
      //updates the employee array with each employees pay amount
      let updatedEmployees = this.state.employees.map(employee=>{
          return {...employee, amount: employee.hours * payPerHour}
      })
      //saves values to state
      this.setState({
          ...this.state,
          employees: updatedEmployees,
          totalHours: totalHours,
          payPerHour: payPerHour
      })
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