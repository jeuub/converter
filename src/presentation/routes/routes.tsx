import React from "react";

import { Route } from "react-router-dom";

import { URL } from "@/constants";

import { Main } from "./main";

type RouteType = {
  path: string;
  element: () => JSX.Element;
};

export const routes: RouteType[] = [
  {
    path: URL.MAIN,
    element: Main,
  },
];

export const renderRoutes = () =>
  ((routes: RouteType[]) => {
    return routes.map((route: RouteType, idx: number) => {
      return <Route key={idx} path={route.path} element={<route.element />} />;
    });
  })(routes);
