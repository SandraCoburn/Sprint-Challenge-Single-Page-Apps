import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import LocationList from "./components/LocationsList";
import { NavLink, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <main>
      <Header />
      <nav>
        <div className="item-sub-nav">
          <NavLink to="/">Welcome Page</NavLink>
          <NavLink to="/CharacterList">Character List</NavLink>
          <NavLink to="/LocationList">Location List</NavLink>
        </div>
      </nav>
      <Switch>
        <Route path="/CharacterList">
          <CharacterList />
        </Route>
        <Route path="/LocationList">
          <LocationList />
        </Route>
        <Route path="/">
          <WelcomePage />
        </Route>
      </Switch>
    </main>
  );
}
