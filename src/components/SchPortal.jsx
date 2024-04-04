import React from "react";
import { useState } from "react";

const SchPortal = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [allStudents, setallStudents] = useState([]);

  const register = () => {
    let student = { firstname, lastname, email, password };
    console.log(student);
    setallStudents([...allStudents, student]);
  };

  return (
    <>
      <div className="d-grid align-items-center justify-content-center p-5">
        <h1 className="display-1 ">Smion Group of Schools</h1>
        <input
          type="text"
          className="form-control form-control-lg m-2"
          placeholder="FirstName"
          onChange={(e) => setfirstname(e.target.value)}
        />
        <input
          type="text"
          className="form-control form-control-lg m-2"
          placeholder="LastName"
          onChange={(e) => setlastname(e.target.value)}
        />
        <input
          type="email"
          className="form-control form-control-lg m-2"
          placeholder="Email"
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="password"
          className="form-control form-control-lg m-2"
          placeholder="Password"
          onChange={(e) => setpassword(e.target.value)}
        />
        <button className="btn btn-lg btn-dark " onClick={register}>
          Submit
        </button>
        <hr />
        {allStudents.length == 0 ? (
          <h1>No Student</h1>
        ) : (
          allStudents.map((student, index) => (
            <div key={index} className="d-flex my-2">
              <h1 className="">{student.firstname}</h1>
              <button className="btn btn-sm btn-outline-success px-4 ms-5">
                Edit
              </button>
              <button className="btn btn-sm btn-outline-danger px-4 ms-2 ">
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default SchPortal;
