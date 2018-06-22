import React, {Component} from 'react';
import EmployeeInput from './EmployeeInput';
import TotalTips from './TotalTips';
import EmployeeTable from './EmployeeTable'

const initalState = {
    totalTips: 0
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
  render() {
    return <div>
            <TotalTips totalTips={this.state.totalTips} handleChangeFor={this.handleChangeFor}/>
            <EmployeeTable />
            <EmployeeInput />
        </div>;
  }
}

export default Form;