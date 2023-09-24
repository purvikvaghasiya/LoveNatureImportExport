import React, { useState, useEffect } from "react";
import axiosApi from "@/axios-instance";
import { useRouter } from "next/router";

const Login1 = (props) => {
  const [loginformvalue, setloginformvalue] = useState({});
  // const [Registeruser, setRegisteruser] = useState({});
  const [formerror, setformerror] = useState({});
  const [visible, setvisible] = useState(false);
  const [Menuopen, setMenuopen] = useState(false);
  const [submit, setsubmit] = useState(false);
  const email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]/i;
  const errors = {};
  const router = useRouter();
  const handlevisible = () => {
    setvisible((prev) => !prev);
    props.LoginOpen((prev) => !prev);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setloginformvalue({ ...loginformvalue, [name]: value });
    if (name == "email") {
      if (!email.test(loginformvalue.email)) {
        setformerror({
          ...formerror,
          [name]: "Please enter a valid email address.",
        });
      } else {
        setformerror({ ...formerror, [name]: "" });
      }
    } else {
      setformerror({ ...formerror, [name]: "" });
    }
  };
  const validate = (values) => {
    props.LoginOpen(true);
    if (!values.email) {
      errors.email = "This field is required.";
    } else if (!email.test(values.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!values.password) {
      errors.password = "This field is required.";
    } else if (!values.password) {
      errors.password = "password is not matched !";
    }
    // if (!values.email) {
    //     errors.email = "This field is required.";
    // } else if (!email.test(values.email)) {
    //     errors.email =
    //         "Please enter a valid email address.";
    // }
    else {
      setsubmit(true);
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setformerror(validate(loginformvalue));
    if (loginformvalue !== undefined) {
      if (loginformvalue.password && loginformvalue.email) {
        axiosApi
          .post("login", loginformvalue)
          .then((res) => {
            console.log("res-data", res.data);
            props.LoginOpen(false);
            if (router.pathname == "/login") {
              router.push("/");
            }
            localStorage.setItem("loginuser", JSON.stringify(res.data));
            setMenuopen(false);
            setloginformvalue({});
          })
          .catch((err) => {
            if (err.response.data !== undefined) {
              setformerror({
                ...formerror,
                field: "Invaild email or password.",
              });
            }
            // if(err.response.data.message){
            //   setformerror({...formerror,field:"Invaild email or password."})
            // }
          });
      }
    }
  };

  return (
    <>
      <form className="form needs-validation" method="post" noValidate>
        <div className="loginbox">
          <h2>Login</h2>
          <div className="mb-2">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              placeholder="Email"
              name="email"
              value={loginformvalue.email || ""}
              required
              onChange={handleChange}
            ></input>
            {formerror.email && (
              <div className="navbar-error">{formerror.email}</div>
            )}
          </div>
          <div className="mb-2">
            <label className="form-label">Password</label>
            <input
              className="form-control "
              type={visible ? "text" : "password"}
              name="password"
              onChange={handleChange}
              placeholder="password"
              value={loginformvalue.password || ""}
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
            {formerror.password && (
              <div className="navbar-error">{formerror.password}</div>
            )}
            {formerror.field && (
              <div className="navbar-error">{formerror.field}</div>
            )}
          </div>
          <div className="mb-2">
            <button
              className="btn btn-login"
              type="submit"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login1;
