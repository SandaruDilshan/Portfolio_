import { motion } from 'framer-motion';
import "../index.css";

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      {/* <motion.div
        className="w-16 h-16 border-4 border-blue-500 rounded-full border-t-transparent"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      /> */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-2xl font-semibold text-white sm:text-4xl">
            Hi There.. <span className='inline-block animate-rotate-in'>🖐️</span>
      </motion.p>
    </div>
  );
};

export default LoadingSpinner;