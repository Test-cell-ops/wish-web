import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import PasswordGate from "@/components/PasswordGate";
import CardReveal from "@/components/CardReveal";
import MessagePage from "@/components/MessagePage";
import ThankYouPage from "@/components/ThankYouPage";

type Stage = "password" | "cards" | "message" | "thankyou";

const Index = () => {
  const [stage, setStage] = useState<Stage>("password");

  return (
    <AnimatePresence mode="wait">
      {stage === "password" && (
        <PasswordGate key="pw" onSuccess={() => setStage("cards")} />
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
