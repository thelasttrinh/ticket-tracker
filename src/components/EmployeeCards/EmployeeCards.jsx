import React from 'react'
import Counter from "../Counter/Counter";

const EmployeeCards = (props) => {
    const {employeeInfo} = props;

  return (
    <div >
      <div className='ticket__employees'>
      {employeeInfo.map((employee) => <div className='ticket__employees--cards' key={employee.id}>
        <div className='ticket__employees--cards--name-role'>{employee.name} <br/> {employee.role}</div>
        <Counter/>
      </div>)}
      </div>

    </div>
  )
}

export default EmployeeCards