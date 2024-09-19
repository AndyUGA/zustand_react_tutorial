
import './App.css'
import { useStore } from './store'

function App() {

  const bears = useStore((state) => state.bears);
  const increasePopulation = useStore((state) => state.increasePopulation)

  return (
    <>
      <h1>{bears} around here...</h1>
      <button onClick={increasePopulation}>one up</button>
    </>
  )
}

export default App

