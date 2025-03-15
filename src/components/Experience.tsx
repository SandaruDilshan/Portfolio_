import TechStack from "../assets/data/Teckhstack.tsx";
import {Certifications, Compititions} from "../assets/data/Certification.tsx";
import { FaExternalLinkAlt, FaLongArrowAltRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import {useScrollDirection} from '../hooks/useCurrentDirection.tsx';

const Experience = () => {
    const scrollDirection = useScrollDirection();
    const shouldAnimate = scrollDirection === 'down';

    return (
        <section id="experience" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-12 text-white">Experience & Certification</h1>
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold mb-6 text-white">Tech Stack</h3>
                    <motion.div
                         initial={{ opacity: 0, y: 50 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ duration: shouldAnimate ? 0.75 : 0 }}
                         viewport={{ margin: "-100px" }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    </motion.div>
                </div>
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold text-white mb-12">Certifications</h3>
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                        <FaLongArrowAltRight className="hidden max-sm:block text-white mb-1" />-
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:flex max-sm:overflow-x-auto max-sm:flex-nowrap">
                        {Certifications.map((certificate) => (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: shouldAnimate ? 1 : 0 }}
                                key={certificate.title} className=" bg-black rounded-md border border-gray-500 overflow-hidden max-sm:flex-shrink-0 max-sm:w-90">
                                <img src={certificate.image} alt={certificate.title} className="w-full h-50 object-cover" />
                                <div className="p-6">
                                    <h4 className="text-lg font-semibold mb-2 text-white">{certificate.title}</h4>
                                    <p className="text-gray-400 ">{certificate.description}</p>
                                    <div className="flex flex-wrap justify-between items-center">
                                        <p className="text-gray-400">{certificate.date}</p>
                                        <a href={certificate.link} className="inline-block transition-transform duration-300 hover:scale-125">
                                            <FaExternalLinkAlt className="text-white" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div> 
                <div>
                    <h3 className="text-2xl font-semibold text-white mb-12">Compititions</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Compititions.map((competition) => (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: shouldAnimate ? 1 : 0 }}    
                                key={competition.title} className="bg-black rounded-md border border-gray-500 overflow-hidden">
                                <img src={competition.image} alt={competition.title} className="w-full h-50 object-cover" />
                                <div className="p-6">
                                    <h4 className="text-lg font-semibold mb-2 text-white">{competition.title}</h4>
                                    <p className="text-gray-400 ">{competition.description}</p>
                                    <p className="text-gray-400">{competition.date}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div> 
            </div>
        </section>
    )
}

export default Experience;  