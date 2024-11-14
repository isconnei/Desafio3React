import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import Footer from "./component/Footer/Footer";
import RegisterPage from "./component/Register/RegisterPage";
import LoginPage from "./component/Register/LoginPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <RegisterPage />
      <LoginPage />
      <Footer />
    </>
  );
}

export default App;
