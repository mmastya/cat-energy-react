import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Main } from "./pages/Main/Main.jsx";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage.jsx";
import { Form } from "./pages/Form/Form.jsx";
import { CounterPage } from "./pages/CounterPage/CounterPage";

export function App() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/catalog" exact component={CatalogPage} />
      <Route path="/form" component={Form} />
      <Route path="/counter" component={CounterPage} />
    </Router>
  );
}
