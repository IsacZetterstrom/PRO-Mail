import React from "react";

function LoginUser() {
  return (
    <div className="login-container">
      <header className="login-header">
        <h1>Logga in</h1>
        <h4>Skriv in rätt uppgifter för att logga in</h4>
      </header>
      <main>
        <div className="input-container">
          <label for="user-input">Användarnamn</label>
          <input className="user-input" name="user-input" />
        </div>
        <div className="input-container">
          <label for="password-input">Lösenord</label>
          <input className="password-input" name="password-input" />
        </div>
        <div className="divider"></div>
        <div className="submit-btn-container">
          <button className="login-btn small-btn">Logga in</button>
          <button className="back-btn small-btn">Tillbaka</button>
        </div>
      </main>
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
