import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "./FloatingHearts";
import Sparkles from "./Sparkles";

interface Props {
  onComplete: () => void;
}

const cards = [
  {
    letter: "S",
    heading: "Spreading Happiness",
    content:
      "You spread happiness and smile everywhere you go. You've a magical spell. Smile please :)",
    emoji: "🌟",
  },
  {
    letter: "H",
    heading: "Helping",
    content:
      "This is very dynamic in you. Your words and actions is helping way for others. It heals and amplify the effects.",
    emoji: "🤝",
  },
  {
    letter: "R",
    heading: "Resonance",
    content:
      "of curiosity, knowledge, ambition and passion. This is truly magical that creates safe space around you. I love this :)",
    emoji: "✨",
  },
  {
    letter: "E",
    heading: "Elegance",
    content:
      "grace and beauty. You're far more beautiful than you realize, not just in how you look but in how you are. Every time I see you or think of you, I fall a little more harder and the better.",
    emoji: "🌹",
  },
  {
    letter: "Y",
    heading: "Youthfulness",
    content:
      "young spirit of not giving up. This makes you glow even more. You deserve every happiness of this world, everything, the best.",
    emoji: "🔥",
  },
  {
    letter: "A",
    heading: "Awesome",
    content:
      "last letter of your name and just the way you're — awesome, amazing, amusing. May every road of your life, goes through the path of happiness and without a single thorn on the way. Always keep smiling, growing and I'll be always be the happiest person for you, behind you for cheering.",
    emoji: "💖",
  },
];

const CardReveal = ({ onComplete }: Props) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [revealedLetters, setRevealedLetters] = useState<string[]>([]);

  useEffect(() => {
    if (currentCard < cards.length) {
      setRevealedLetters((prev) => [...prev, cards[currentCard].letter]);
    }
  }, [currentCard]);

  const handleNext = () => {
    if (currentCard < cards.length - 1) {
      setCurrentCard((prev) => prev + 1);
    } else {
      onComplete();
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-romantic flex flex-col items-center justify-center relative overflow-hidden px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <FloatingHearts count={10} />
      <Sparkles count={12} />

      {/* Letter tracker */}
      <motion.div
        className="relative z-10 flex gap-3 mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {cards.map((card, i) => (
          <motion.span
            key={card.letter}
            className={`font-script text-4xl md:text-5xl transition-all duration-500 ${
              revealedLetters.includes(card.letter)
                ? "text-gold"
                : "text-muted-foreground opacity-30"
            }`}
            animate={
              i === currentCard
                ? { scale: [1, 1.2, 1], transition: { repeat: Infinity, duration: 2 } }
                : {}
            }
          >
            {card.letter}
          </motion.span>
        ))}
      </motion.div>

      {/* Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCard}
          className="relative z-10 max-w-lg w-full bg-card-gradient border border-wine rounded-2xl p-8 md:p-10 shadow-romantic"
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: -90, opacity: 0 }}
          transition={{ duration: 0.7, type: "spring", damping: 15 }}
          style={{ perspective: "1000px" }}
        >
          <motion.div
            className="text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="text-5xl mb-4 block">{cards[currentCard].emoji}</span>
            <div className="font-script text-7xl md:text-8xl text-gold mb-2">
              {cards[currentCard].letter}
            </div>
            <h2 className="font-display text-2xl md:text-3xl text-cream mb-6 tracking-wide">
              {cards[currentCard].heading}
            </h2>
            <p className="font-body text-lg md:text-xl text-cream leading-relaxed opacity-90">
              {cards[currentCard].content}
            </p>
          </motion.div>

          <motion.div className="text-center mt-8">
            <motion.button
              onClick={handleNext}
              className="px-8 py-3 rounded-xl bg-gold-gradient font-display text-base tracking-wider shadow-romantic transition-all duration-300"
              style={{ color: "hsl(15 30% 8%)" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {currentCard < cards.length - 1 ? "Next Letter →" : "Continue to Message 💌"}
            </motion.button>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Progress */}
      <motion.div
        className="relative z-10 mt-6 flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {cards.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
              i <= currentCard ? "bg-gold-gradient shadow-glow" : "bg-wine"
            }`}
            style={i <= currentCard ? { background: "hsl(30 60% 65%)" } : undefined}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CardReveal;
