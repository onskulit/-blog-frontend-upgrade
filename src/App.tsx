import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./index.scss";
import { About } from "./pages/about/About";
import { Main } from "./pages/main/Main";

export const App = () => {
  return (
    <>
      <Link to="/">Main Page</Link>
      <Link to="/about">About</Link>

      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/about"} element={<About />} />
      </Routes>
    </>
  );
};
