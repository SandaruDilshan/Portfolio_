
import { motion } from 'framer-motion';
import Images from '../assets/images/images.tsx'
import { Code2, Grid2x2Check, MonitorSmartphone } from 'lucide-react'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import { TbBrandGmail } from "react-icons/tb";
import { Link } from 'react-scroll';
import { useScrollDirection } from '../hooks/useCurrentDirection.tsx';

const About = () => {

  const scrollDirection = useScrollDirection();
  const shouldAnimate = scrollDirection === 'down';

    return (
        <section id="about" className="py-20 bg-black overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className=" md:w-1/2 border-none shadow-none">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: shouldAnimate ? 0.75 : 0 }}
                    >
                        <div className=' max-sm:rounded-full max-sm:overflow-hidden max-sm:relative max-sm:h-75 max-sm:w-100 '>
                            <img className='border-transparent max-sm:absolute' src={Images.Profile_pic} alt="Profile picture" />
                        </div>
                    </motion.div>
                    </div>
                    <div className="md:w-1/2">
                        <motion.h1
                            initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: shouldAnimate ? 1 : 0 }}
                            className="text-4xl text-white font-bold mb-6 max-sm:text-3xl">
                            Hello, I'm Sandaru Dilshan.
                        </motion.h1>
                        <motion.h2
                            initial={{ opacity: 0, x: 150 }}
                            whileInView={{ opacity: 2, x: 0 }}
                            transition={{ duration: shouldAnimate ? 0.75 : 0 }}
                            className="text-2xl text-indigo-400 mb-4">
                            <pre>Software Engineer</pre>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: shouldAnimate ? 0.5 : 0 }}
                            className="text-gray-300 mb-5">
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
                        </motion.p>

                        <div className="grid grid-cols-2 gap-4 mb-10">
                            <div className="flex items-center gap-2 text-gray-400">
                                <Code2 className='text-indigo-400' />
                                <span>Full Stack Developer</span>
                            </div>
                            <div className="flex items-center text-gray-400 gap-2">
                                <Grid2x2Check className='text-indigo-400' />
                                <span>UX/UI</span>
                            </div>
                            <div className="flex items-center text-gray-400 gap-2">
                                <MonitorSmartphone className='text-indigo-400' />
                                <span>Web Applications Development</span>
                            </div>
                            <div className="flex items-center text-gray-400 gap-2">
                                <MonitorSmartphone className='text-indigo-400' />
                                <span>Moblie Application Development</span>
                            </div>
                        </div>
                        <div className="flex justify-start gap-5">
                            <a href="https://www.linkedin.com/in/sandarudev20"
                                className="inline-block transition-transform duration-300 hover:scale-125">
                                <FaLinkedin className='bg-blue-500 h-8 w-8 ' />
                            </a>
                            <a href="https://github.com/SandaruDilshan"
                                className="inline-block transition-transform duration-300 hover:scale-125">
                                <FaGithubSquare className='bg-purple-500 h-8 w-8 ' />
                            </a>
                            <a href="https://medium.com/@jsandarudilshan"
                                className="inline-block transition-transform duration-300 hover:scale-125">
                                <SiMedium className='bg-white w-8 h-8 border-1 border-white' />
                            </a>
                            <Link to="contact_form" smooth={true} duration={1000}>
                                <TbBrandGmail className="w-8 h-8 text-red-500 border-white border-2 transition-transform duration-300 hover:scale-125" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;