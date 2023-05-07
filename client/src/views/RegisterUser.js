import React from "react";
import { useNavigate } from "react-router-dom";
import { fetchFormData, fetchJson } from "../service/fetchData.js";

function RegisterUser() {
  const navigate = useNavigate();

  async function onSubmit(event) {
    event.preventDefault();

    const userEntry = fetchFormData(event.target);

    const response = await fetchJson(
      "http://127.0.0.1:3002/auth/register",
      "POST",
      userEntry
    );
    if (response.status === 409) {
      console.log("användare redan tagen");
    } else {
      const data = await response.text();
      console.log(data);
      navigate("/Login");
    }
  }
  return (
    <div className="register-container">
      <header className="register-header">
        <h1>Skapa Konto</h1>
        <h4>Fyll i uppgifterna för att skapa ett konto</h4>
      </header>

      <form className="register-form" onSubmit={onSubmit}>
        <div className="input-container">
          <label htmlFor="username">Förnamn</label>
          <input className="user-input" name="username" />
        </div>
        <div className="input-container">
          <label htmlFor="surname">Efternamn</label>
          <input className="user-input" name="surname" />
        </div>
        <div className="input-container">
          <label htmlFor="email">Epostadress</label>
          <input className="user-input" name="email" />
        </div>
        <div className="input-container">
          <label htmlFor="password">Lösenord</label>
          <input className="password-input" name="password" />
        </div>

        <div className="divider"></div>
        <div className="submit-btn-container">
          <button type="submit" className="login-btn small-btn">
            Registrera
          </button>
          <button
            onClick={() => {
              navigate("/");
            }}
            className="back-btn small-btn">
            Tillbaka
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterUser;
