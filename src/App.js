import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Content from "./components/layout/Content";

import MyDuck from "./pages/MyDuck";
import About from "./pages/About";
import Sandbox from "./pages/Sandbox";


export const PAGES = [
    { name: "MyDuckOld", path: "/myduck/old", component: <MyDuck /> },
    { name: "MyDuck", path: "/myduck", component: <Content /> },

    { name: "About", path: "/myduck/about", component: <About /> },
    { name: "Sandbox", path: "/myduck/sandbox", component: <Sandbox /> },
  ];

export default function App() {

  return (
    <Layout>
      <Switch>
        {PAGES.map((page) => (
          <Route path={page.path} exact>
            {page.component}
          </Route>
        ))}
      </Switch>
    </Layout>
  );
}
