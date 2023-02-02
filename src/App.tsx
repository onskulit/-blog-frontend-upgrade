import { Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { AboutLazy } from "./pages/about/About.lazy";
import { MainLazy } from "./pages/main/Main.lazy";
import { useTheme } from "./theme/useTheme";

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>TOGGLE</button>

      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutLazy />} />
          <Route path={"/"} element={<MainLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};
