import {SceneBox} from './styled-scene'

//Interface for each scene prop
interface SceneProps {
    text: string
};

export default function Scene (props: SceneProps) {
    return (
        <SceneBox><p>{props.text}</p></SceneBox>
    )
}