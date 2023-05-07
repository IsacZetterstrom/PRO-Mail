import React from "react";
import { useNavigate } from "react-router-dom";
function LandingSite() {
  const navigate = useNavigate();
  return (
    <div className="landingSite-container">
      <header className="landingsite-header">
        <h1>Välkommen till PRO-Mail</h1>
      </header>

      <main>
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="login-btn big-btn">
          Logga In
        </button>
        <div className="divider"></div>
        <button
          onClick={() => {
            navigate("/register");
          }}
          className="createAccount-btn big-btn">
          Skapa Konto
        </button>
        <div className="divider"></div>
        <button
          onClick={() => {
            navigate("/contact");
          }}
          className="contactUs-btn big-btn">
          Kontakta Oss
        </button>
      </main>
    </div>
  );
}

export default LandingSite;
