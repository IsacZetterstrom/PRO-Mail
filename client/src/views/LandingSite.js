import React from "react";
function LandingSite() {
  return (
    <div className="landingSite-container">
      <header className="landingsite-header">
        <h1>Välkommen till PRO-Mail</h1>
      </header>

      <main>
        <button className="login-btn big-btn">Logga In</button>
        <div className="divider"></div>
        <button className="createAccount-btn big-btn">Skapa Konto</button>
        <div className="divider"></div>
        <button className="contactUs-btn big-btn">Kontakta Oss</button>
      </main>
    </div>
  );
}

export default LandingSite;
