import React from "react";
import { useNavigate } from "react-router-dom";
import { fetchFormData, fetchJson } from "../service/fetchData.js";

function LoginUser() {
  const navigate = useNavigate();

  async function onSubmit(event) {
    event.preventDefault();
    const userEntry = fetchFormData(event.target);

    console.log(userEntry);
    const response = await fetchJson(
      "http://127.0.0.1:3002/auth/login",
      "POST",
      userEntry
    );

    if (response.status !== 400) {
      const data = await response.json();
      console.log(data);
      navigate("/inbox");
    } else {
      const data = await response.text();
      console.log(data);
    }
  }
  return (
    <div className="login-container">
      <header className="login-header">
        <h1>Logga in</h1>
        <h4>Skriv in rätt uppgifter för att logga in</h4>
      </header>

      <form className="login-form" onSubmit={onSubmit}>
        <div className="input-container">
          <label htmlFor="email">Epost</label>
          <input className="user-input" name="email" />
        </div>

        <div className="input-container">
          <label htmlFor="password">Lösenord</label>
          <input className="password-input" name="password" />
        </div>

        <div className="divider"></div>
        <div className="submit-btn-container">
          <button type="submit" className="login-btn small-btn">
            Logga in
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
      <div className="reg-link-container">
        <a className="reg-link" href="register">
          Saknar du konto? Registrera dig här!
        </a>
      </div>

      <aside className="support-container">
        <div className="reset-pass-container">
          <h3>Återställ Lösenord</h3>
          <button className="reset-pass-btn big-btn">Återställ</button>
        </div>
        <div className="contact-container">
          <h3>Problem?</h3>
          <button className="contactUs-btn big-btn">Kontakta Oss</button>
        </div>
      </aside>
    </div>
  );
}

export default LoginUser;
