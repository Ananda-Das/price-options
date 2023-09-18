import './App.css'
import LineChart from './components/LineChart/LineChart'
import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'
// import DauisyNav from './components/dauisy-nav/DauisyNav'

function App() {

  return (
    <>
      <Navbar></Navbar>
      {/* <DauisyNav></DauisyNav> */}
      <h1>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </>
  )
}

export default App
