import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/about",
        component: About,
    },
];

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    {/* ROUTER LOOP */}
                    {routes.map((route) => (
                        <Route
                            path={route.path}
                            component={route.component}
                            exact={true}
                        />
                    ))}
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
