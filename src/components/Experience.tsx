import TechStack from "../assets/data/Teckhstack.tsx";
import Certifications from "../assets/data/Certification.tsx";
import { FaExternalLinkSquareAlt } from "react-icons/fa";


const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-12 text-white">Experience & Certification</h1>
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold mb-6 text-white">Tech Stack</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {TechStack.map((item) => (
                            <div key={item.category} className="bg-black p-6 rounded-lg border border-gray-900">
                                <h4 className="text-lg font-semibold mb-3 text-indigo-400">
                                    {item.category}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {item.skills.map((skill) => (
                                        <span
                                            key={skill.name}
                                            className="px-3 py-1 bg-indigo-900/30 text-indigo-300 rounded-full text-sm flex items-center gap-2">
                                            {skill.icon}
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-3xl font-semibold text-white mb-12">Certifications</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Certifications.map((certificate) => (
                            <div key={certificate.title} className="bg-black rounded-md border border-gray-500 overflow-hidden">
                                <img src={certificate.image} alt={certificate.title} className="w-full h-50 object-cover" />
                                <div className="p-6">
                                    <h4 className="text-lg font-semibold mb-2 text-white">{certificate.title}</h4>
                                    <p className="text-gray-400 ">{certificate.description}</p>
                                    <div className="flex flex-wrap justify-between items-center">
                                        <p className="text-gray-400">{certificate.date}</p>
                                        <FaExternalLinkSquareAlt className="text-white rounded-2xl"/>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> 
            </div>
        </section>
    )
}

export default Experience;  