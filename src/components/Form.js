import React, {Component} from 'react';
import EmployeeInput from './EmployeeInput';
import TotalTips from './TotalTips'

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
            <EmployeeInput />
        </div>;
  }
}

export default Form;