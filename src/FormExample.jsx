import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";



const FormExample = () => {
  const [userName, setUsername] = useState("");
  const [newUserDetails, setNewUserDetails] = useState("");
  const notify = () => toast("YOUR DATA IS SUCCESFULLY UPLOADED;");

  const getUsername = (event) => {
    setUsername(event.target.value);
  };
  const userDetails = (e) => {
    e.preventDefault()
    setNewUserDetails(userName);
    notify()
  };
  return (
    <section className="formSection">
      <h2> Hello,{newUserDetails}</h2>
      <ToastContainer />
      <div className="inputDiv">
        <form onSubmit={userDetails}>
  <input
    type="text"
   placeholder="ENTER YPUR NAME"
    onChange={getUsername}
  />
  <button type="submit">Submit</button>
</form>

        <br />

        <button className="submitBtn" onClick={userDetails}>
          Submit
        </button>
      </div>
    </section>
  );
};

export default FormExample;
