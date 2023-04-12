import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainContent from "./components/layout/MainContent";
import About from "./pages/About";
import Sandbox from "./pages/Sandbox";

export const PAGES = [
  { name: "MyDuck", path: "/myduck", element: <MainContent />, exact: true },
  { name: "About", path: "/myduck/about", element: <About />, exact: false },
  { name: "Sandbox", path: "/myduck/sandbox", element: <Sandbox />, exact: false },
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
