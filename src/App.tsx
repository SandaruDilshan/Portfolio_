import Navbar from "./components/Navbar.tsx"
import About from "./components/About.tsx"
import Experience from "./components/Experience.tsx"
import Projects from "./components/Projects.tsx"

function App() {

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-16">
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  )
}

export default App
