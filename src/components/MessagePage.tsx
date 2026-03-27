import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "./FloatingHearts";
import Sparkles from "./Sparkles";

interface Props {
  onComplete: () => void;
}

const MessagePage = ({ onComplete }: Props) => {
  const [showMessage, setShowMessage] = useState(false);

  const message = `A very happiest B'day to you Shreyaaaaaaaaa... Welcome to the club of 24th. I'm more excited than anyone else. You really deserve the best of everything. My virtual hugs and kisses to you. I'm proud of you, your achievement and I just appreciate your existence. This is just the starting line, more and more dhuandhaar, dhamakedaar achievements are waiting for you ahead. I've always believed in you and I always will. From your first footstep to this step, you've came across so far; experiencing dynamics of situations, emotions, variations and aspirations. This is your day, and I pray ki aapka har din aisa hi khushnuma ho. I wish every dreams of your come true. Kuch logo ka bas hone se sab achha lagta hai, aur aap apne chahne walo ke liye woh ho. Message gonna be very long so I've to stop here. Wishing you every success in every domain of your life - personal, professional, wealth and health.`;

  return (
    <motion.div
      className="min-h-screen bg-romantic flex flex-col items-center justify-center relative overflow-hidden px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <FloatingHearts count={20} />
      <Sparkles count={25} />

      <div className="relative z-10 max-w-2xl w-full text-center">
        <AnimatePresence mode="wait">
          {!showMessage ? (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="font-script text-5xl md:text-7xl text-gold mb-8"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                A Message
              </motion.div>

              <motion.p
                className="font-display text-xl md:text-2xl text-cream mb-4 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                It is my message for my person in the world
              </motion.p>

              <motion.div
                className="font-body text-lg md:text-xl text-gold mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                with the probability
              </motion.div>

              <motion.div
                className="font-display text-2xl md:text-4xl text-cream mb-2 tracking-wide"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, type: "spring" }}
              >
                1 / 8,000,000,000
              </motion.div>

              <motion.div
                className="font-display text-lg md:text-2xl text-gold mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                = 1.25 × 10⁻¹⁰
              </motion.div>

              <motion.button
                onClick={() => setShowMessage(true)}
                className="px-10 py-4 rounded-2xl bg-gold-gradient font-display text-lg tracking-wider shadow-romantic animate-pulse-glow transition-all duration-300"
                style={{ color: "hsl(15 30% 8%)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                💌 Read My Message
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-card-gradient border border-wine rounded-2xl p-8 md:p-10 shadow-romantic"
            >
              <motion.div className="font-script text-4xl md:text-5xl text-gold mb-6">
                💝 For You 💝
              </motion.div>

              <motion.p
                className="font-body text-lg md:text-xl text-cream leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                {message}
              </motion.p>

              <motion.button
                onClick={onComplete}
                className="mt-8 px-10 py-3 rounded-xl bg-gold-gradient font-display text-base tracking-wider shadow-romantic transition-all duration-300"
                style={{ color: "hsl(15 30% 8%)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Continue →
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default MessagePage;
