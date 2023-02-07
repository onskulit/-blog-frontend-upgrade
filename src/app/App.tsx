import { Suspense } from "react";
import { Link } from "react-router-dom";
import "./styles/index.scss";
import { useTheme } from "shared/lib/providers/ThemeProvider";
import { classNames } from "shared/lib/helpers";
import { AppRouter } from "./lib/router/AppRouter";
import { Navbar } from "widgets/navbar";

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />

      <button onClick={toggleTheme}>TOGGLE</button>

      <AppRouter />
    </div>
  );
};
