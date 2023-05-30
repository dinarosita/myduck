import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Content from "./components/Layout/Content";
import About from "./pages/About";
import Sandbox from "./pages/Sandbox";
import CustomHooks from "./pages/CustomHooks";

export const PAGES = [
  { name: "MyDuck", path: "/myduck", element: <Content />, exact: true },
  { name: "About", path: "/myduck/about", element: <About />, exact: false },
  {
    name: "Sandbox",
    path: "/myduck/sandbox",
    element: <Sandbox />,
    exact: false,
  },
  {
    name: "customHooks",
    path: "/myduck/customHooks",
    element: <CustomHooks />,
    exact: false,
  },
];


export default function App() {

  return (
    <Layout>
      <Routes>
        {PAGES.map((page) => (
          <Route
            key={page.name}
            path={page.path}
            exact={page.exact}
            element={page.element}
          ></Route>
        ))}
      </Routes>
    </Layout>
  );
}
