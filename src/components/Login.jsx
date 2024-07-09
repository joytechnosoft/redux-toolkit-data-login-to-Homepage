import React, { useState } from "react";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch=useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(setUser({name,email}))
    navigate("/dashboard");
  };

  const navigate = useNavigate();
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <h1>{`${name} -${email}`}</h1>
      <MDBInput
        wrapperClass="mb-4"
        onChange={(e) => setName(e.target.value)}
        label="Name"
        value={name}
        id="form2"
        type="text"
      />
      <MDBInput
        wrapperClass="mb-4"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        label="Email address"
        id="form1"
        type="email"
      />

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox
          name="flexCheck"
          id="flexCheckDefault"
          label="Remember me"
        />
        <a href="!#">Forgot password?</a>
      </div>

      <MDBBtn onClick={handleSubmit} className="mb-4">
        Sign in
      </MDBBtn>

      <div className="text-center">
        <p>
          Not a member? <a href="#!">Register</a>
        </p>
      </div>
    </MDBContainer>
  );
}

export default Login;
