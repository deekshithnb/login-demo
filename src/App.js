import "./App.css";
import LoginPage from "./Component/loginPage";
import { Routes, Route } from "react-router-dom";
import MyAccount from "./Component/my-account";
import EmptyLogin from "./Component/emptypage";
import { useReducer, createContext } from "react";

// 1. Create context
export const TokenContext = createContext();

// 2. Reducer for token
const initialState = { token: "" };

function tokenReducer(state, action) {
  switch (action.type) {
    case "SET_TOKEN":
      return { token: action.payload };
    case "CLEAR_TOKEN":
      return { token: "" };
    default:
      return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(tokenReducer, initialState);

  return (
    // 3. Provide token and dispatch globally
    <TokenContext.Provider value={{ token: state.token, dispatch }}>
      <div className="App">
        <div className="App-component">
          <Routes>
            <Route path="/" element={<EmptyLogin />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/my-account" element={<MyAccount />} />
          </Routes>
        </div>
      </div>
    </TokenContext.Provider>
  );
}

export default App;
