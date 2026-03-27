import { motion } from "framer-motion";
import FloatingHearts from "./FloatingHearts";
import Sparkles from "./Sparkles";

const ThankYouPage = () => {
  return (
    <motion.div
      className="min-h-screen bg-romantic flex flex-col items-center justify-center relative overflow-hidden px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <FloatingHearts count={25} />
      <Sparkles count={30} />

      <div className="relative z-10 text-center">
        <motion.div
          className="text-7xl md:text-9xl mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 8, delay: 0.3 }}
        >
          🎂
        </motion.div>

        <motion.h1
          className="font-script text-6xl md:text-8xl text-gold mb-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Thank You
        </motion.h1>

        <motion.p
          className="font-display text-xl md:text-3xl text-cream mb-4 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          Thanks for being here till now
        </motion.p>

        <motion.p
          className="font-body text-lg text-gold mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
        >
          Made with 💖 just for you
        </motion.p>

        <motion.div
          className="mt-10 font-script text-3xl md:text-4xl text-cream"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.7, 1] }}
          transition={{ delay: 3, duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          Happy Birthday, Shreya! 🎉
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ThankYouPage;
