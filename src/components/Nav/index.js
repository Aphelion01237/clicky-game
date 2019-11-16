import React from "react";
import NavMessage from "../NavMessage";
import "./style.css";

// Component for the Navbar

function Nav(props) {
  return (
    <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="/">Pokemans Game!</a>
        </li>
        <NavMessage score={props.score} topScore={props.topScore} />
        <li>
          Pokedex: {props.score} | Highest Pokedex: {props.topScore}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
