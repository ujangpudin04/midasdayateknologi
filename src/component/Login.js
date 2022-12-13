import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/context";
import { API } from "../config/api";
import { useMutation } from "react-query";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  let Navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const [state, dispatch] = useContext(UserContext);

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Configuration
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Data body
      const body = form;

      // Insert data for login process
      const response = await API.post("/login", body, config);
      if (response.status === 200) {
        Navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div className="d-flex justify-content-center align-items-center flex-column m-auto">
      <form onSubmit={(e) => handleSubmit.mutate(e)}>
        <div class="d-flex justify-content-center align-items-center flex-column m-auto">
          <div class="col-auto">
            <label for="username" class="col-form-label">
              Username
            </label>
          </div>
          <div class="col-auto">
            <input
              name="email"
              type="text"
              id="text"
              class="form-control"
              aria-describedby="text"
              onChange={handleChange}
            />
          </div>
        </div>

        <div class="row g-3 align-items-center d-flex justify-content-center align-items-center flex-column">
          <div class="col-auto">
            <label for="inputPassword6" class="col-form-label">
              Password
            </label>
          </div>
          <div class="col-auto">
            <input
              name="password"
              type="password"
              id="inputPassword6"
              class="form-control"
              aria-describedby="passwordHelpInline"
              onChange={handleChange}
            />
          </div>
          <div class="col-auto">
            <span id="passwordHelpInline" class="form-text">
              Must be 8-20 characters long.
            </span>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
