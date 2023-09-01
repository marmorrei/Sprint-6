//Interface for each scene prop
interface SceneProps {
    text: string
};

export default function Scene (props: SceneProps) {
    return (
        <p>{props.text}</p>
    )
}