import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "./FloatingHearts";
import Sparkles from "./Sparkles";

interface Props {
  onSuccess: () => void;
}

const PasswordGate = ({ onSuccess }: Props) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "Shreya") {
      onSuccess();
    } else {
      setError(true);
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-romantic flex items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8 }}
    >
      <FloatingHearts count={12} />
      <Sparkles count={15} />

      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.div
          className="font-script text-6xl md:text-8xl text-gold mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, type: "spring" }}
        >
          ✨ A Special Day ✨
        </motion.div>

        <motion.p
          className="text-cream font-body text-xl md:text-2xl mb-12 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          This is for someone truly extraordinary...
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className={`max-w-sm mx-auto ${shaking ? "animate-[shake_0.5s_ease-in-out]" : ""}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          style={{
            animation: shaking
              ? "shake 0.5s ease-in-out"
              : undefined,
          }}
        >
          <label className="block font-display text-lg text-cream mb-3 tracking-wider">
            Who is this for? 💫
          </label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter the name..."
            className="w-full px-6 py-4 rounded-xl bg-card-gradient border border-wine text-cream font-body text-lg text-center tracking-widest placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-romantic animate-pulse-glow transition-all"
            autoFocus
          />
          <motion.button
            type="submit"
            className="mt-6 px-10 py-3 rounded-xl bg-gold-gradient font-display text-lg tracking-wider shadow-romantic hover:shadow-glow transition-all duration-300"
            style={{ color: "hsl(15 30% 8%)" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Unlock 🔐
          </motion.button>

          <AnimatePresence>
            {error && (
              <motion.p
                className="mt-4 text-rose font-body text-base"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                Hmm, that's not right. Try again! 💝
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>
      </motion.div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }
      `}</style>
    </motion.div>
  );
};

export default PasswordGate;
