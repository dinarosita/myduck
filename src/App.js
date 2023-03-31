import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MyDuck from "./pages/MyDuck";
import SleekDuck from "./pages/SleekDuck";
import Tailwind from "./pages/Tailwind";

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <MyDuck />
        </Route>
        <Route path="/sleekduck">
          <SleekDuck />
        </Route>
        <Route path="/tailwind">
          <Tailwind />
        </Route>
      </Switch>
    </Layout>
  );
}
