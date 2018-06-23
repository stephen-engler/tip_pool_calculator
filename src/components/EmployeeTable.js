import React from 'react';

const EmployeeTable = (props)=>{
    const renderTable=()=>{
        let table = props.employees.map(employee=>{
            return(<tr>
                <td>{employee.name}</td>
                <td>{employee.hours}</td>
                <td>{employee.percent}</td>
                <td>{employee.amount}</td>
            </tr>)
        })
        return table;
    }
    return(
        <div>
            <table>
                <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        hours
                    </th>
                    <th>
                        percent
                    </th>
                </tr>
                </thead>
                <tbody>
                    {renderTable()}
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeTable;