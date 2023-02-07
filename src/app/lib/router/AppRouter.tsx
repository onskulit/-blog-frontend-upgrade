import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeMapper } from "./routeMapper";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeMapper).map(({ path, element }) => (
          <Route path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};
