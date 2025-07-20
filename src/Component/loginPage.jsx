import { useContext } from "react";
import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import CREATE_TOKEN from "../graphQL/createToken";
import { TokenContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { dispatch, token } = useContext(TokenContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [getToken, { data }] = useMutation(CREATE_TOKEN);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  function isValidEmail(mail) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(mail);
  }

  function isValidPassword(pass) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return passwordRegex.test(pass);
  }

  const handleSignIn = () => {
    if (isValidEmail(email) && isValidPassword(password)) {
      getToken({ variables: { email, password } }).catch((error) => {
        setErrorMsg(error.message);
      });
    } else {
      setErrorMsg("Wrong e-mail or passowrd");
    }
  };

  const updateToken = (token) => {
    // Simulate login and set token
    dispatch({ type: "SET_TOKEN", payload: token });
  };

  useEffect(() => {
    if (data?.generateCustomerToken?.token) {
      updateToken(data.generateCustomerToken.token);
      navigate("/my-account");
    }
  }, [data]);

  return (
    <div>
      <h2>SIGN IN</h2>
      <div className="modal-content animate">
        <div className="container">
          <label htmlFor="email">
            <b>E-mail</b>
          </label>
          <input
            type="text"
            placeholder="Enter E-mail"
            name="email"
            required
            onChange={handleEmail}
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
            onChange={handlePassword}
          />

          <button onClick={handleSignIn}>SIGN IN</button>
        </div>
        {errorMsg}
        <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
          <Link to="/">
            <button type="button" className="cancelbtn">
              Cancel
            </button>
          </Link>
          <span className="psw">
            Forgot <a href="#">password?</a>
          </span>
        </div>
      </div>
    </div>
  );
}
