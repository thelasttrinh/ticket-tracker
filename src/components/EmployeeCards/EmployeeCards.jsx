import React from 'react'
import Counter from "../Counter/Counter";

const EmployeeCards = (props) => {
    const {employeeInfo} = props;

  return (
    <div >
      <div className='ticket__employees'>
      {employeeInfo.map((employee) => <span className='ticket__employees--cards' key={employee.id}><span>{employee.name}<br/>{employee.role}</span></span>)}
      </div>
        <>
        
        </>
    </div>
  )
}

export default EmployeeCards