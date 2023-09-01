import Scene from './components/scene/Scene'
import './App.css'
import data from './data'

export default function App() {

  const scenes: JSX.Element[] = data.map(item => {
    return (
      <Scene text={item}/>
    )
  });

  return (
    <main>
      {scenes}
    </main>
  )
}