import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import Swal from "sweetalert2";


const Contact = () => {

    const form = useRef<HTMLFormElement | null>(null);
    // const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;  // Ensure form exists before sending email

        emailjs
            .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
                publicKey: import.meta.env.VITE_PUBLIC_KEY,
            })
            .then(
                () => {
                    Swal.fire({
                        title: "Success!",
                        text: "Your message has been sent successfully.",
                        icon: "success",
                        confirmButtonColor: "#4F46E5",
                      });
                    form.current?.reset(); // Clear form
                    // setTimeout(() => setSuccessMessage(null), 5000); // Hide after 5 sec
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    Swal.fire({
                        title: "Error!",
                        text: "Failed to send message. Please try again.",
                        icon: "error",
                        confirmButtonColor: "#EF4444",
                    });
                    // setTimeout(() => setSuccessMessage(null), 5000); // Hide after 5 sec
                },
            );
    };

    return (
        <section id="contact" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold  text-center mb-12 text-white">Get In Touch</h2>
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold mb-4 text-white">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-gray-300">
                                    <Mail className='text-indigo-400' />
                                    <span>jsandarudilshan@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <Phone className='text-indigo-400' />
                                    <span>+94 711410094</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <MapPin className='text-indigo-400' />
                                    <span>Nugegoda, Sri Lanka</span>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <a href="https://www.linkedin.com/in/sandarudev20" className="text-gray-400 hover:text-indigo-400">
                                    <Linkedin size={24} />
                                </a>
                                <a href="https://github.com/SandaruDilshan" className="text-gray-400 hover:text-indigo-400">
                                    <Github size={24} />
                                </a>
                                <a href="https://x.com/SandaruDil84119" className="text-gray-400 hover:text-indigo-400">
                                    <Twitter size={24} />
                                </a>
                            </div>
                        </div>

                        <form id='contact_form' ref={form} onSubmit={sendEmail} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1"> Name </label>
                                <input type="text"
                                    name="user_name"
                                    className="w-full px-4 py-2 bg-black border border-gray-800 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1"> Email  </label>
                                <input type="email"
                                    name="user_email"
                                    className="w-full px-4 py-2 bg-black border border-gray-800 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1"> Message </label>
                                <textarea rows={4}
                                    name="message"
                                    className="w-full px-4 py-2 bg-black border border-gray-800 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white">
                                </textarea>
                            </div>
                            <button type="submit"
                                value="Send"
                                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;