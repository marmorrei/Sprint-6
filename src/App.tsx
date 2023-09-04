import React from "react";
import Scene from "./components/scene/Scene";
//import WelcomeScreen from "./components/welcome-screen/WelcomeScreen";
import "./App.css";
import data from "./data";

export default function App() {
  const [isShownWelcome, setIsShownWelcome] = React.useState(true);
  const [highlightedLine, setHighlightedLine] = React.useState(0);

  function toggleShownWelcome(): void {
    setIsShownWelcome((prevIsShownWelcome) => !prevIsShownWelcome);
  }

  function prevLine(): void {
    highlightedLine > 0 &&
      setHighlightedLine((prevHighlightedLine) => prevHighlightedLine - 1);
  }

  function nextLine(): void {
    highlightedLine < data.length - 1 &&
      setHighlightedLine((prevHighlightedLine) => prevHighlightedLine + 1);
  }

  const scenes: JSX.Element[] = data.map((item) => {
    return (
      <Scene
        key={item}
        text={item}
        index={data.indexOf(item)}
        highlightedLine={highlightedLine}
      />
    );
  });

  return isShownWelcome ? (
    <main className="welcome-screen">
      <h1>Benvingut/da</h1>
      <p>
        Un/a client/a que té com a producte principal una web de gestió
        empresarial desenvolupada amb React, ens ha demanat que desenvolupem un
        tutorial, en el qual mitjançant dos botons els nous usuaris puguin
        avançar i retrocedir en els consells, modificant-se el text d'ajuda i la
        imatge de fons.
      </p>
      <button className="welcome-screen--button" onClick={toggleShownWelcome}>
        Comença
      </button>
    </main>
  ) : (
    <main className="story">
      <button className="story--button-prev" onClick={prevLine}>
        Anterior
      </button>
      <button className="story--button-next" onClick={nextLine}>
        Següent
      </button>
      {scenes}
    </main>
  );
}
