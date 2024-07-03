import React, { useContext } from "react";
import { Route as contextRoute } from "../../contextapi/route";
import { Route, Routes } from "react-router-dom";

const RouteRenderer = () => {
  const { routes } = useContext(contextRoute);

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={<route.component />}
          exact={route.exact}
        />
      ))}
    </Routes>
  );
};

export default RouteRenderer;
