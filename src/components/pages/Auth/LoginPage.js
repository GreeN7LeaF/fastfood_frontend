import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// const loginBG = require("../../../images/admin/login-bg.jpg");
import "../../../css/root.css";
import "./Login.css";
import { Login } from "../../../services/authServices";
import loginBG from "./images/login-bg.png";
import { toast } from "react-toastify";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const result = await Login(email, password);
      //login successfully
      if (result && result.EC == 1) {
        //save data to session "User"
        toast.success(result.EM);
        sessionStorage.setItem("User", JSON.stringify(result.DT));
        console.log("result: ", result.DT.Position);
        switch (result.DT.Position) {
          case 1:
            navigate("/kitchen");
            break;
          case 3:
            navigate("/casher");
            break;
          case 4:
            navigate("/admin");
            break;
          default:
            navigate("/login");
        }
      } else {
        setError(result.EM);
      }
    } catch (error) {}
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleEmailChange = (event) => {
    setError(null);
    if (!isValidEmail(email)) {
      setEmailError("Invalid email");
    } else {
      setEmailError("");
    }

    setEmail(event.target.value);
  };

  useEffect(() => {
    //logout
    if (sessionStorage.getItem("User")) {
      sessionStorage.removeItem("User");
    }
  }, []);

  return (
    <div
      id="loginContent"
      // style={{ backgroundImage: `url(${loginBG})`, backgroundSize: "contain" }}
      class="row position-relative"
    >
      <div
        className="cloud-bg"
        style={{
          backgroundImage: `url(${loginBG})`,
          backgroundSize: "cover",
        }}
      >
        <div id="loginForm" class="">
          <div class="row bg">
            <div class="form-title w-100 text-center">Đăng nhập</div>
            <div class="form-container">
              <div className="text-danger">{error}</div>
              <form>
                {/* <!-- Email input --> */}
                <div class="form-outline mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="form-control"
                    onChange={(e) => handleEmailChange(e)}
                  />
                  <label class="form-label" for="email">
                    email
                    <span className="ms-2 text-danger">
                      {emailError != "" && emailError}
                    </span>
                  </label>
                </div>

                {/* <!-- Password input --> */}
                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="form2Example2"
                    class="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label class="form-label" for="form2Example2">
                    Mật khẩu
                  </label>
                </div>
                {/* <!-- 2 column grid layout for inline styling --> */}
                <div class="row mb-4">
                  <div class="col d-flex justify-content-center">
                    {/* <!-- Checkbox --> */}
                    <div class="form-check d-flex flex-row gap-2 align-items-center">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="form2Example31"
                        checked
                      />
                      <label class="form-check-label" for="form2Example31">
                        Nhớ tài khoản
                      </label>
                    </div>
                  </div>
                  <div class="col">
                    {/* <!-- Simple link --> */}
                    <a href="#!">Quên mật khẩu?</a>
                  </div>
                </div>
                {/* <!-- Submit button --> */}
                <button
                  type="button"
                  class="submit-btn btn btn-block mb-4"
                  onClick={handleSubmit}
                >
                  Đăng nhập
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
