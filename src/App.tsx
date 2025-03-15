import LoadingSpinner from "./components/Skelaton.tsx"
import Navbar from "./components/Navbar.tsx"
import About from "./components/About.tsx"
import Experience from "./components/Experience.tsx"
import Projects from "./components/Projects.tsx"
import Contact from "./components/Contact.tsx"

import { useState, useEffect } from 'react';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-16">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
