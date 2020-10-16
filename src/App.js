import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home/Home";
import Order from "./Order/Order/Order";
import Login from "./Login/Login/Login";
import { useState } from "react";
import { createContext } from "react";
import PrivateRoute from "./Login/Login/PrivateRoute";

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
      {/* <Order></Order> */}
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <PrivateRoute path="/order">
            <Order></Order>
          </PrivateRoute>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
