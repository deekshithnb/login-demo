import "./App.css";
import LoginPage from "./Component/loginPage";
import { Routes, Route } from "react-router-dom";
import MyAccount from "./Component/my-account";

function App() {
  return (
    <div className="App">
      <div className="App-component">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/my-account" element={<MyAccount />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
