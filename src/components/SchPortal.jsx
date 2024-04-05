import React from "react";
import { useState } from "react";

const SchPortal = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [allStudents, setallStudents] = useState([]);
  const [editedIndex, seteditedIndex] = useState(0);
  const [editedValue, seteditedValue] = useState(0);
  const [editedfirstname, seteditedfirstname] = useState("");
  const [editedlastname, seteditedlastname] = useState("");
  const [editedemail, seteditedemail] = useState("");
  const [editedpassword, seteditedpassword] = useState("");

  const register = () => {
    let student = { firstname, lastname, email, password };
    // Check for empty fields
    if (!firstname || !lastname || !email || !password) {
      alert("Please fill in all required fields.");
      return; // Prevent further execution if validation fails
    }
    console.log(student);
    setallStudents([...allStudents, student]);
    setfirstname("");
    setlastname("");
    setemail("");
    setpassword("");
  };
  const deleteStudent = (studentIndex) => {
    let allNewStudents = [...allStudents];
    let found = allNewStudents.filter(
      (student, index) => index != studentIndex
    );
    setallStudents(found);
  };
  const editStudent = (ind) => {
    seteditedIndex(ind);
    let selectedUser = allStudents[ind];
    seteditedfirstname(selectedUser.firstname);
    seteditedlastname(selectedUser.lastname);
    seteditedemail(selectedUser.email);
    seteditedpassword(selectedUser.password);
    seteditedValue(selectedUser);
  };
  const updateDetails = () => {
    let updateDetails = {
      firstname: editedfirstname,
      lastname: editedlastname,
      email: editedemail,
      password: editedpassword,
    };
    let newAllStudents = [...allStudents];
    newAllStudents[editedIndex] = updateDetails;
    setallStudents(newAllStudents)
  };

  return (
    <>
      <div className="d-grid align-items-center justify-content-center p-5">
        <h1 className="display-1 ">................Smion................</h1>
        <input
          type="text"
          className="form-control form-control-lg m-2"
          placeholder="FirstName"
          onChange={(e) => setfirstname(e.target.value)}
          value={firstname}
        />
        <input
          type="text"
          className="form-control form-control-lg m-2"
          placeholder="LastName"
          onChange={(e) => setlastname(e.target.value)}
          value={lastname}
        />
        <input
          type="email"
          className="form-control form-control-lg m-2"
          placeholder="Email"
          onChange={(e) => setemail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          className="form-control form-control-lg m-2"
          placeholder="Password"
          onChange={(e) => setpassword(e.target.value)}
          value={password}
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
              <h1 className="">{student.firstname } { student.lastname}</h1>
              <button
                className="btn btn-sm btn-outline-warning px-4 ms-5"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => editStudent(index)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-outline-danger px-4 ms-2"
                onClick={() => deleteStudent(index)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit {editedValue.firstname}'s details
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control form-control-lg m-2"
                placeholder="FirstName"
                value={editedfirstname}
                onChange={(e) => seteditedfirstname(e.target.value)}
              />
              <input
                type="text"
                className="form-control form-control-lg m-2"
                placeholder="LastName"
                value={editedlastname}
                onChange={(e) => seteditedlastname(e.target.value)}
              />
              <input
                type="email"
                className="form-control form-control-lg m-2"
                placeholder="Email"
                value={editedemail}
                onChange={(e) => seteditedemail(e.target.value)}
              />
              <input
                type="password"
                className="form-control form-control-lg m-2"
                placeholder="Password"
                value={editedpassword}
                onChange={(e) => seteditedpassword(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={updateDetails}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchPortal;
