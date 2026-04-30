"use client";

import { useState, useRef, useEffect } from "react";
import { chatbotKB } from "@/lib/data";

interface Message {
  role: "user" | "bot";
  text: string;
  time: string;
}

function getTime() {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getBotReply(input: string): string {
  const q = input.toLowerCase().trim();

  // Direct key match first
  if (chatbotKB[q]) return chatbotKB[q];

  // Partial keyword match
  for (const key of Object.keys(chatbotKB)) {
    if (q.includes(key) || key.includes(q)) {
      return chatbotKB[key];
    }
  }

  // Semantic fallbacks
  if (q.match(/who (are|r) you|what (are|r) you|introduce/)) {
    return chatbotKB["who"];
  }
  if (q.match(/where.*live|where.*based|where.*from|live in/)) {
    return chatbotKB["location"];
  }
  if (q.match(/how.*contact|reach.*you|get in touch/)) {
    return chatbotKB["contact"];
  }
  if (q.match(/what.*do|what.*work|what.*speciali|what.*do for/)) {
    return chatbotKB["summary"];
  }
  if (q.match(/year|how long|how many year/)) {
    return chatbotKB["years of experience"];
  }
  if (q.match(/stack|tech|technolog/)) {
    return chatbotKB["technologies"];
  }
  if (q.match(/job|work|position|role|employ/)) {
    return chatbotKB["current"];
  }
  if (q.match(/study|school|college|university|diploma|graduate/)) {
    return chatbotKB["education"];
  }
  if (q.match(/project|built|made|portfolio|work on/)) {
    return chatbotKB["projects"];
  }
  if (q.match(/open|looking|hire|available|opportunit/)) {
    return chatbotKB["hire"];
  }
  if (q.match(/thank|thanks|appreciate|nice/)) {
    return "You're welcome! Feel free to ask anything else about Yvonne. 😊";
  }
  if (q.match(/bye|goodbye|see you|ciao/)) {
    return "Goodbye! Don't hesitate to reach out to Yvonne at yvonmontefrio@gmail.com. 👋";
  }

  return "I'm sorry, that information is not available in Yvonne's profile. You can reach her directly at yvonmontefrio@gmail.com for more details!";
}

const suggestions = [
  "What are her skills?",
  "Where is she based?",
  "What is her experience?",
  "How to contact her?",
  "What tech does she use?",
  "Tell me about her education",
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "👋 Hi! I'm Yvonne's virtual assistant. Ask me anything about her skills, experience, or how to get in touch!",
      time: getTime(),
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  const resetChat = () => {
    setMessages([
      {
        role: "bot",
        text: "👋 Hi! I'm Yvonne's virtual assistant. Ask me anything about her skills, experience, or how to get in touch!",
        time: getTime(),
      },
    ]);
    setShowSuggestions(true);
    setInput("");
    setTyping(false);
  };

  const sendMessage = (text?: string) => {
    const msg = (text || input).trim();
    if (!msg) return;

    const userMsg: Message = { role: "user", text: msg, time: getTime() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);
    setShowSuggestions(false);

    setTimeout(
      () => {
        const reply = getBotReply(msg);
        setMessages((prev) => [
          ...prev,
          { role: "bot", text: reply, time: getTime() },
        ]);
        setTyping(false);
      },
      800 + Math.random() * 400,
    );
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 pink-glow"
        style={{ background: "linear-gradient(135deg, #be185d, #ec4899)" }}
        aria-label="Open chatbot"
      >
        {open ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        )}
        {/* Pulse ring */}
        {!open && (
          <span
            className="absolute w-full h-full rounded-full animate-ping opacity-30"
            style={{ background: "linear-gradient(135deg, #be185d, #ec4899)" }}
          />
        )}
      </button>

      {/* Chat window */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-3xl shadow-2xl overflow-hidden transition-all duration-400 ${
          open
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        }`}
        style={{
          background: "#0f0f0f",
          border: "1px solid rgba(255,255,255,0.1)",
          maxHeight: "520px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div
          className="px-5 py-4 flex items-center gap-3"
          style={{ background: "linear-gradient(135deg, #be185d, #ec4899)" }}
        >
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-lg flex-shrink-0">
            👩‍💻
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-sm">
              Yvonne&apos;s Assistant
            </p>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
              <p className="text-pink-100 text-xs">Always online</p>
            </div>
          </div>
          <button
            onClick={resetChat}
            className="text-white/70 hover:text-white transition-colors"
            title="Restart chat"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
          <button
            onClick={() => setOpen(false)}
            className="text-white/70 hover:text-white transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div
          className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
          style={{ minHeight: 0 }}
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className="max-w-[80%]">
                {msg.role === "bot" && (
                  <div className="flex items-end gap-2">
                    <div
                      className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs mb-1"
                      style={{
                        background: "linear-gradient(135deg, #fce7f3, #f9a8d4)",
                      }}
                    >
                      👩‍💻
                    </div>
                    <div>
                      <div className="chat-bubble-bot px-4 py-2.5 text-sm leading-relaxed">
                        {msg.text}
                      </div>
                      <p className="text-xs text-gray-400 mt-1 ml-1">
                        {msg.time}
                      </p>
                    </div>
                  </div>
                )}
                {msg.role === "user" && (
                  <div className="flex flex-col items-end">
                    <div className="chat-bubble-user px-4 py-2.5 text-sm leading-relaxed">
                      {msg.text}
                    </div>
                    <p className="text-xs text-gray-400 mt-1 mr-1">
                      {msg.time}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {typing && (
            <div className="flex justify-start">
              <div className="flex items-end gap-2">
                <div
                  className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs mb-1"
                  style={{
                    background: "linear-gradient(135deg, #fce7f3, #f9a8d4)",
                  }}
                >
                  👩‍💻
                </div>
                <div className="chat-bubble-bot px-4 py-3">
                  <div className="flex gap-1 items-center h-4">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Suggestions */}
          {showSuggestions && (
            <div className="pt-2">
              <p className="text-xs text-gray-500 mb-2 text-center">
                Try asking:
              </p>
              <div className="flex flex-wrap gap-1.5 justify-center">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => sendMessage(s)}
                    className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-pink-400 hover:bg-white/5 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input area */}
        <div className="px-4 py-3 border-t border-white/5 bg-[#0a0a0a]">
          <div className="flex gap-2 items-center">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask about Yvonne..."
              className="flex-1 text-sm px-4 py-2.5 rounded-full outline-none bg-white/5 border border-white/10 focus:border-pink-500/50 focus:bg-white/10 transition-all placeholder-gray-500 text-gray-200"
            />
            <button
              onClick={() => sendMessage()}
              disabled={!input.trim() || typing}
              className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-all duration-200 flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #be185d, #ec4899)",
              }}
            >
              <svg
                className="w-4 h-4 rotate-90"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
