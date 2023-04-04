import React from "react";
import team from "./data/team";
import EmployeeCards from "./components/EmployeeCards/EmployeeCards";
import "./App.scss";

const App = () => {
  return (
    <div className="ticket">
      <h1 className="ticket__header">Ticket Tracker</h1>
      <div>
        <EmployeeCards employeeInfo={team} />
      </div>
    </div>
  );
};

export default App;
