import React from "react";
import { useState } from "react";

const SchPortal = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const register = () => {};
  const changeFirstName = (e) => {
    setfirstname(e.target.value)
};
  const changeLastName = (e) => {
    setlastname(e.target.value)
};
  return (
    <>
      <div className="d-grid align-items-center justify-content-center p-5">
        <h1 className="display-1 ">Simeon Group of Schools</h1>
        <input
          type="text"
          className="form-control form-control-lg m-2"
          placeholder="FirstName"
          onChange={(e) => changeFirstName(e)}
        />
        <input
          type="text"
          className="form-control form-control-lg m-2"
          placeholder="LastName"
          onChange={(e) => changeLastName(e)}
        />
        <input
          type="email"
          className="form-control form-control-lg m-2"
          placeholder="Email"
        />
        <input
          type="password"
          className="form-control form-control-lg m-2"
          placeholder="Password"
        />
        <button className="btn btn-lg btn-dark " onClick={register}>
          Submit
        </button>
        <hr />
        <hr />
        <div>{firstname} {lastname}</div>
      </div>
    </>
  );
};

export default SchPortal;
