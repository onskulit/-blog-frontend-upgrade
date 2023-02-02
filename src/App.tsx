import { Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./index.scss";
import { AboutLazy } from "./pages/about/About.lazy";
import { MainLazy } from "./pages/main/Main.lazy";

export const App = () => {
  return (
    <>
      <Link to="/">Main Page</Link>
      <Link to="/about">About</Link>

      <Suspense fallback="Loading...">
        <Routes>
          <Route path={"/"} element={<MainLazy />} />
          <Route path={"/about"} element={<AboutLazy />} />
        </Routes>
      </Suspense>
    </>
  );
};
