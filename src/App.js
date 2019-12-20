import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import SearchForm from "./components/SearchForm";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default function App() {
  return (
    <main>
      <Header />
      <nav>
        <div className="nav-links">
          <Link to="/">Welcome Page</Link>
          <Link to="/CharacterList">Character List</Link>
        </div>
      </nav>
      <Switch>
        <Route path="/CharacterList">
          <CharacterList />
        </Route>
        <Route path="/">
          <WelcomePage />
        </Route>
      </Switch>
    </main>
  );
}
