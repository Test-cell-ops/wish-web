import { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import PasswordGate from "@/components/PasswordGate";
import CardReveal from "@/components/CardReveal";
import MessagePage from "@/components/MessagePage";
import ThankYouPage from "@/components/ThankYouPage";

type Stage = "password" | "cards" | "message" | "thankyou";

const MUSIC_URL = "https://cdn.pixabay.com/audio/2024/11/28/audio_3a4b4c9db2.mp3";

const Index = () => {
  const [stage, setStage] = useState<Stage>("password");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startMusic = () => {
    if (!audioRef.current) {
      const audio = new Audio(MUSIC_URL);
      audio.loop = true;
      audio.volume = 0.15;
      audioRef.current = audio;
    }
    audioRef.current.play().catch(() => {});
  };

  const handlePasswordSuccess = () => {
    startMusic();
    setStage("cards");
  };

  return (
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
  );
};

export default Index;
