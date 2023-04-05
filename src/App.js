import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MyDuck from "./pages/MyDuck";
import Sandbox from "./pages/Sandbox";
import SleekDuck from "./pages/SleekDuck";
import Tailwind from "./pages/Tailwind";

export const PAGES = [
    { name: "MyDuck", path: "/myduck", component: <MyDuck /> },
    { name: "SleekDuck", path: "/myduck/sleekduck", component: <SleekDuck /> },
    { name: "Tailwind", path: "/myduck/tailwind", component: <Tailwind /> },
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
