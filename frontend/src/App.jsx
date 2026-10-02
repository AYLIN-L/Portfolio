import Navbar from "./components/Navbar"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Hom from "./sections/hom"
import Project from "./sections/Project"
function App() {
  return (
    <>
    <nav >
      <Navbar/>
    </nav>
    <main>
      <Hom/>
      <About/>
      <Project/>
      <Contact/>
    </main>
    
    </>
  )
}
export default App
