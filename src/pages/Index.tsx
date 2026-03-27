import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import PasswordGate from "@/components/PasswordGate";
import CardReveal from "@/components/CardReveal";
import MessagePage from "@/components/MessagePage";
import ThankYouPage from "@/components/ThankYouPage";

type Stage = "password" | "cards" | "message" | "thankyou";

const MUSIC_PATH = "/romantic-melody.mp3";

const Index = () => {
  const [stage, setStage] = useState<Stage>("password");
  const [showMusicButton, setShowMusicButton] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playMusic = async () => {
    if (!audioRef.current) return;

    audioRef.current.loop = true;
    audioRef.current.volume = 0.15;

    try {
      await audioRef.current.play();
      setShowMusicButton(false);
    } catch {
      setShowMusicButton(true);
    }
  };

  const handlePasswordSuccess = () => {
    void playMusic();
    setStage("cards");
  };

  return (
    <>
      <audio ref={audioRef} src={MUSIC_PATH} preload="auto" />

      <AnimatePresence mode="wait">
        {stage === "password" && (
          <PasswordGate key="pw" onSuccess={handlePasswordSuccess} />
        )}
        {stage === "cards" && (
          <CardReveal key="cards" onComplete={() => setStage("message")} />
        )}
        {stage === "message" && (
          <MessagePage key="msg" onComplete={() => setStage("thankyou")} />
        )}
        {stage === "thankyou" && <ThankYouPage key="ty" />}
      </AnimatePresence>

      {showMusicButton && stage !== "password" && (
        <button
          type="button"
          onClick={() => void playMusic()}
          className="fixed bottom-4 right-4 z-50 rounded-full bg-primary px-4 py-2 font-display text-sm text-primary-foreground shadow-romantic transition-all duration-300 hover:scale-105"
        >
          Tap to play music 🎵
        </button>
      )}
    </>
  );
};

export default Index;
