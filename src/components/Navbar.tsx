import { Link } from 'react-scroll';
import { User, Briefcase, FolderGit2, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { title: 'About', icon: <User size={20} />, to: 'about' },
        { title: 'Experience', icon: <Briefcase size={20} />, to: 'experience' },
        { title: 'Projects', icon: <FolderGit2 size={20} />, to: 'projects' },
        { title: 'Buy me a coffee', icon: <Mail size={20} />, to: 'contact'}
    ]

    return (
        <nav className="fixed w-full bg-black/80  backdrop-blur-sm z-50 border-b border-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="text-xl font-bold text-indigo-400">@sandarudev.</div>
                    {/*Desktop */}
                    <div className="hidden md:flex space-x-8">
                        {
                            navItems.map((item) => (
                                <Link
                                    key={item.title}
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    className="text-gray-300 hover:text-indigo-400 cursor-pointer transition-colors"
                                >
                                   {item.title} 
                                </Link>
                            ))
                        }
                    </div>

                    {/*Mobile */}
                    <div className="md:hidden">
                        <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-300 hover:text-indigo-400 focus:outline-none"
                        aria-label="Toggle menu"
                        >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                <div className={`md:hidden transition-all duration-300 ease-in-out 
                        ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'} 
                        overflow-hidden`}>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navItems.map((item) => (
                        <Link
                            key={item.title}
                            to={item.to}
                            smooth={true}
                            duration={500}
                            className="flex items-center space-x-3 text-gray-300 hover:text-indigo-400 hover:bg-gray-800/50 px-3 py-2 rounded-md transition-colors cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.icon}
                            <span className="text-sm">{item.title}</span>
                        </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;