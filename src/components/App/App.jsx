import "./App.css";
import { Route, Routes } from "react-router-dom";
import { GlobalProvider } from "../GlobalState/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <Routes>
      </Routes>
    </GlobalProvider>
  );
};
export default App;