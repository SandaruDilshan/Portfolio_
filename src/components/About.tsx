import Images from '../assets/images/images.tsx'
import {Code2, Grid2x2Check, MonitorSmartphone  } from 'lucide-react'

const About = () => {
    return (
        <section id="about" className="py-20 bg-black">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2 border-none shadow-none">
                        <img className='border-transparent' src={Images.Profile_pic}  alt="Profile picture" />
                    </div>
                    <div className="md:w-1/2">
                        <h1 className="text-4xl text-white font-bold mb-6">Hello, I'm Sandaru Dilshan</h1>
                        <h2 className="text-2xl text-indigo-400 mb-4"><pre>Software Engineer</pre></h2>
                        <p className="text-gray-300 mb-5">
                            <i>
                                <span className='block mb-2'>I am a passionate Software Engineer who thrives on solving complex problems and building
                                innovative solutions.
                                With a strong technical background, I work with multi-disciplinary teams to achieve
                                both technical excellence and business success. </span>
                                My goal is to develop high-quality, user-centric applications that enhance
                                user experiences and drive business growth.
                                I bring well-rounded technical expertise in software development,
                                ensuring that every project I contribute to is scalable, efficient, and impactful.
                                Whether it's crafting seamless user experiences, optimizing backend performance,
                                or architecting scalable systems, I am committed to delivering the best solutions that
                                meet both user needs and business objectives.
                                <span className='block mt-3'>
                                    Let’s build something great together!
                                </span>
                            </i>
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-2 text-gray-400">
                                <Code2 className='text-indigo-400' />
                                <span>Full Stack Developer</span>
                            </div>
                            <div className="flex items-center text-gray-400 gap-2">
                                <Grid2x2Check className='text-indigo-400' />
                                <span>UX/UI</span>
                            </div>
                            <div className="flex items-center text-gray-400 gap-2">
                                <MonitorSmartphone  className='text-indigo-400' />
                                <span>Web Applications Development</span>
                            </div>
                            <div className="flex items-center text-gray-400 gap-2">
                                <MonitorSmartphone  className='text-indigo-400' />
                                <span>Moblie Application Development</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;