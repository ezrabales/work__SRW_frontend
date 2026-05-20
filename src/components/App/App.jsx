import "./App.css";
import { Route, Routes } from "react-router-dom";
import { GlobalProvider } from "../GlobalState/GlobalState";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Work from "../Work/Work";
import About from "../About/About";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </GlobalProvider>
  );
};
export default App;
