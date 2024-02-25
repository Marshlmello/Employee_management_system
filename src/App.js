import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "./components/AddEmployee";

function App() {
  const [employees, setEmployees] = useState([]);

  function updateEmployee(id, newFirstName, newLastName, newEmail, newSkills) {
    const updatedEmployee = employees.map((employee) => {
      if (id === employee.id) {
        return {
          ...employee,
          firstName: newFirstName,
          lastName: newLastName,
          email: newEmail,
          skills: newSkills,
        };
      }
      return employee;
    });
    setEmployees(updatedEmployee);
  }

  function newEmployee(fistName, lastName, email, skills) {
    const newEmployee = {
      id: uuidv4(),
      firstName: fistName,
      lastName: lastName,
      email: email,
      skills: skills,
    };
    setEmployees([...employees, newEmployee]);
  }

  return (
    <div>
      <header className=" w-screen border-2 rounded-sm px-2 ">
        Mitarbeiterübersicht
      </header>

      <div className="bg-gray-100 h-screen flex justify-center ">
        <div className="flex items-center w-4/12 flex-col space-y-4 ">
          <AddEmployee newEmployee={newEmployee} />

        <div className="w-full">
            {employees.map((employee) => {
              return (
                <Card
                  key={uuidv4()}
                  id={employee.id}
                  firstName={employee.firstName}
                  lastName={employee.lastName}
                  email={employee.email}
                  skills={employee.skills}
                  updateEmployee={updateEmployee}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
