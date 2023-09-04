import { SceneBox, SceneBoxHighlighted } from "./styled-scene";

//Interface for each scene prop
interface SceneProps {
  key: string;
  text: string;
  index: number;
  highlightedLine: number;
}

export default function Scene(props: SceneProps): React.JSX.Element {
  return props.index === props.highlightedLine ? (
    <SceneBoxHighlighted>
      <p>{props.text}</p>
    </SceneBoxHighlighted>
  ) : (
    <SceneBox>
      <p>{props.text}</p>
    </SceneBox>
  );
}
