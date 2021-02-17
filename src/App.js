import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import { createContext } from "react";
import Home from "./components/Home/Home";
import PrivateRoute from "./components/Login/PrivateRoute";
import Order from "./components/Order/Order";
import Login from "./components/Login/Login";

export const userContext = createContext();

function App() {
  const [selectedService, setSelectedService] = useState([])
  const [userLogin, setUserLogin] = useState({
    isSignIn: false,
    name: "",
    email: "",
    photo: "",
    error: "",
  });

  return (
    <userContext.Provider value={{user:[userLogin, setUserLogin], service:[selectedService,setSelectedService]}}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home /> 
          </Route>

          <PrivateRoute path="/order">
            <Order /> 
          </PrivateRoute>

          <Route path="/login">
            <Login /> 
          </Route>

          <Route exact path="/">
            <Home /> 
          </Route>

        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
