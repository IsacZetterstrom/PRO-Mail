import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginUser from "./views/LoginUser";
import LandingSite from "./views/LandingSite";
import RegisterUser from "./views/RegisterUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingSite />} />
          <Route path="/Login" element={<LoginUser />} />
          <Route path="/register" element={<RegisterUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
