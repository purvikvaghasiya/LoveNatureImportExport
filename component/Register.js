import React, { useState } from "react";
import axiosApi from "@/axios-instance";
import { useRouter } from "next/router";

const Register1 = (props) => {
  const [error, seterror] = useState({});
  const [formvalue, setformvalue] = useState({});
  const [visible, setvisible] = useState(false);
  const [submit, setsubmit] = useState();
  const Errors = {};
  const router = useRouter();
  const email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]/i;
  const handlevisible = () => {
    setvisible((prev) => !prev);
  };
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setformvalue({ ...formvalue, [name]: value });
    if (name == "email") {
      if (!email.test(formvalue.email)) {
        seterror({ ...error, [name]: "Please enter a valid email address." });
      } else {
        seterror({ ...error, [name]: "" });
      }
    } else {
      seterror({ ...error, [name]: "" });
    }
  };
  const validateregister = (values) => {
    props.Registeropen(true);
    if (!values.name) {
      Errors.name = "This field is required.";
    }
    if (!values.email) {
      Errors.email = "This field is required.";
    } else if (!email.test(values.email)) {
      Errors.email = "Please enter a valid email address.";
    }
    if (!values.password) {
      Errors.password = "This field is required.";
    }
    if (!values.confirm_password) {
      Errors.confirm_password = "This field is required";
    } else if (values.password !== values.confirm_password) {
      Errors.confirm_password = "*password is not matched!";
    } else {
      setsubmit(true);
    }
    return Errors;
  };
  const handleRegister = (e) => {
    e.preventDefault();
    seterror(validateregister(formvalue));
    console.log("register",router)
    if (
      formvalue.name &&
      formvalue.email &&
      formvalue.password &&
      formvalue.confirm_password
    ) {
      axiosApi
        .post("signup", formvalue)
        .then((res) => {
          props.Registeropen(false);
          if (router.pathname == "/register") {
            router.push("/login");
          }
          setformvalue({});
          console.log("res", res.data.data);
        })
        .catch((err) => console.log("err", err));
    }
  };
  return (
    <form
      className="form needs-validation register-box"
      method="post"
      onSubmit={(e) => handleRegister(e)}
    >
      <h2>Register</h2>
      <div className="mb-1">
        <label className="form-label">Name</label>
        <input
          className="form-control"
          placeholder="Username"
          type="text"
          name="name"
          value={formvalue.name || ""}
          required
          onChange={handleRegisterChange}
        ></input>
        {error.name && <div className="navbar-error">{error.name}</div>}
      </div>
      <div className="mb-2">
        <label className="form-label">Email</label>
        <input
          className="form-control"
          type="text"
          name="email"
          onChange={handleRegisterChange}
          placeholder="Email"
          value={formvalue.email || ""}
          required
        ></input>
        {error.email && <div className="navbar-error">{error.email}</div>}
      </div>
      <div className="mb-2">
        <label className="form-label">Password</label>
        <input
          className="form-control"
          type={visible ? "text" : "password"}
          name="password"
          onChange={handleRegisterChange}
          placeholder="password"
          value={formvalue.password || ""}
          required
        ></input>
        <div className="password-icon">
          {visible ? (
            <span onClick={handlevisible}>
              <i className="fa-solid fa-eye"></i>
            </span>
          ) : (
            <span onClick={handlevisible}>
              <i className="fa-solid fa-eye-slash"></i>
            </span>
          )}
        </div>
        {error.password && <div className="navbar-error">{error.password}</div>}
      </div>
      <div className="mb-2">
        <label className="form-label">Cofirm Password</label>
        <input
          className="form-control"
          type={visible ? "text" : "password"}
          name="confirm_password"
          onChange={handleRegisterChange}
          placeholder="Confirm Password"
          value={formvalue.confirm_password || ""}
          required
        ></input>
        <div className="password-icon">
          {visible ? (
            <span onClick={handlevisible}>
              <i className="fa-solid fa-eye"></i>
            </span>
          ) : (
            <span onClick={handlevisible}>
              <i className="fa-solid fa-eye-slash"></i>
            </span>
          )}
        </div>
        {error.confirm_password && (
          <div className="navbar-error">{error.confirm_password}</div>
        )}
      </div>

      <div className="mb-2">
        <button
          className="btn btn-register"
          type="submit"
          onClick={(e) => handleRegister(e)}
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default Register1;
