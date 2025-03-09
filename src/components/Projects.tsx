import projects from "../assets/data/ProjectsData.tsx";
import { FiGithub } from "react-icons/fi";

const Projects = () => {
    return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-black text-gray-300 rounded-full text-sm" >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="flex items-center gap-1 text-gray-400 hover:text-indigo-400">
                    <FiGithub size={20} />
                    <span>Code</span>
                  </a>
                  {/* <a
                    href={project.live}
                    className="flex items-center gap-1 text-gray-400 hover:text-indigo-400"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
}

export default Projects;