import React from "react";
import Scene from "./components/scene/Scene";
import "./App.css";
import data from "./data";

export default function App() {
  const [highlightedLine, setHighlightedLine] = React.useState(0);

  function prevLine(): void {
    highlightedLine > 0 &&
      setHighlightedLine((prevHighlightedLine) => prevHighlightedLine - 1);
  }

  function nextLine(): void {
    highlightedLine < data.length - 1 &&
      setHighlightedLine((prevHighlightedLine) => prevHighlightedLine + 1);
  }

  console.log(highlightedLine);

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

  return (
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
