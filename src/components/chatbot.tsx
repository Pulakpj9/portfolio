"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    Array<{ text: string; sender: "user" | "bot" }>
  >([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Knowledge base about you
  const knowledgeBase: Record<string, string> = {
    "who are you": "I'm Pulak Jain, a Human Software Engineer.",
    "what do you do":
      "I'm a full-stack developer specializing in creating efficient, scalable web applications.",
    skills:
      "My skills include React, Node.js, TypeScript, Python, and more! Check my Skills section for details.",
    experience:
      "I have experience working with various tech companies and startups. See my Experience section for my work history.",
    contact:
      "You can reach me through my social media links or email. Check the Socials section!",
    default:
      "I'm not sure about that, but I can tell you about Pulak's skills, experience, or background. Try asking something like 'What are your skills?'",
  };

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = { text: input, sender: "user" as const };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate bot thinking
    setTimeout(() => {
      const query = input.toLowerCase();
      let response = knowledgeBase.default;

      // Check for matching questions
      for (const [question, answer] of Object.entries(knowledgeBase)) {
        if (query.includes(question)) {
          response = answer;
          break;
        }
      }

      // Add bot response
      setMessages((prev) => [
        ...prev,
        { text: response, sender: "bot" as const },
      ]);
    }, 500);
  };

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Chatbot toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-400 to-pink-400 p-4 rounded-full shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={24} /> : <Bot size={24} />}
      </motion.button>

      {/* Chatbot window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-8 w-80 h-96 bg-gray-800 rounded-lg shadow-xl flex flex-col z-50 border border-gray-700 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gray-900 p-4 text-white font-bold flex items-center">
              <Bot size={20} className="mr-2" />
              Ask me about Pulak
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.length === 0 ? (
                <div className="text-gray-400 text-center py-8">
                  Ask me anything about Pulak!
                </div>
              ) : (
                messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`mb-4 ${
                      msg.sender === "user" ? "text-right" : "text-left"
                    }`}
                  >
                    <div
                      className={`inline-block px-4 py-2 rounded-lg ${
                        msg.sender === "user"
                          ? "bg-cyan-500 text-white"
                          : "bg-gray-700 text-white"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-700">
              <div className="flex">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-l-lg focus:outline-none"
                  placeholder="Ask about Pulak..."
                />
                <button
                  onClick={handleSend}
                  className="bg-cyan-500 text-white px-4 py-2 rounded-r-lg hover:bg-cyan-600"
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
