
import Navbar from './components/navbar';
import Hero from './components/hero';
import Highlights from './components/highlights';
import Model from "./components/Model";

const App = () => {
  
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  )
}

export default App