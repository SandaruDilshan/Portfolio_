import TechStack from "../data/Teckhstack.tsx";

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-12 text-white">Experience & Certification</h1>
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold mb-6 text-white">Text Stack</h3>
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
            </div>
        </section>
    )
}

export default Experience;