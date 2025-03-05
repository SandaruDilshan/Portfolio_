import Navbar from "./components/Navbar.tsx"
import About from "./components/About.tsx"
import Experience from "./components/Experience.tsx"

function App() {

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-16">
        <About />
        <Experience />
      </main>
    </div>
  )
}

export default App
