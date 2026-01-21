import React, { useState } from "react";

const Employee = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [dept, setDept] = useState("");
  console.log(name, role, email, dept);
  const empDetails = { name, role, email, dept };
  const empHandler = async(e) => {
    e.preventDefault();

    console.log(empDetails);

    const response = await fetch("http://localhost:8082/api/emp/add-emp",{
        method:"POST",
        headers:{
            "content-Type":"Application/json"

        },
        body:JSON.stringify(empDetails)
    })
  };
  return (
    <div className="empform">
      <div className="section">
        <form onSubmit={empHandler}>
          <label>EmployeeName</label>
          <br />
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <label>Employee Role</label>
          <br />
          <input
            type="text"
            name="role"
            onChange={(e) => setRole(e.target.value)}
          />
          <label>Employee Email</label>
          <br />
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Employee Departement</label>
          <br />
          <input
            type="text"
            name="dept"
            onChange={(e) => setDept(e.target.value)}
          />
          <br />

          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default Employee;
