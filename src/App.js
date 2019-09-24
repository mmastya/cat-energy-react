import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main/Main.jsx";
import Catalog from "./pages/Catalog/Catalog.jsx";
import Form from "./pages/Form/Form.jsx";

function App() {
  return (
    <Router>
      <Route path="/main" exact component={Main} />
      <Route path="/catalog" exact component={Catalog} />
      <Route path="/form" component={Form} />
    </Router>
  );
}

export default App;
