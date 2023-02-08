import { Suspense } from "react";
import { Link } from "react-router-dom";
import "./styles/index.scss";
import { useTheme } from "shared/lib/providers/ThemeProvider";
import { classNames } from "shared/lib/helpers";
import { AppRouter } from "./lib/router/AppRouter";
import { Navbar } from "widgets/navbar";
import { Sidebar } from "widgets/sidebar";

export const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />

      <div className="content-page">
        <Sidebar />

        <AppRouter />
      </div>
    </div>
  );
};
