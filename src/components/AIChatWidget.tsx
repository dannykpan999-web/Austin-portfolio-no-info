import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useTheme } from '@/contexts/ThemeContext';
import { personalInfo } from '@/data/personalInfo';
import { experienceData } from '@/data/experience';
import { skillCategories } from '@/data/skills';
import { projectsData } from '@/data/projects';

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const buildSystemPrompt = (): string => {
  const { name, title, bio, contact, education } = personalInfo;

  const experienceText = experienceData
    .map(
      (exp) =>
        `${exp.title} at ${exp.company} (${exp.location}), ${exp.period}:\n${exp.achievements.map((a) => `  - ${a}`).join('\n')}`
    )
    .join('\n\n');

  const skillsText = skillCategories
    .map((cat) => `${cat.title}: ${cat.skills.join(', ')}`)
    .join('\n');

  const projectsText = projectsData
    .map(
      (p) =>
        `${p.title} [${p.tags.join(', ')}]: ${p.description[0]}`
    )
    .join('\n');

  return `You are a friendly AI assistant on Austin Bartlett's portfolio website. Answer questions about Austin's background, skills, experience, and projects based on the following information. Keep answers concise, professional, and helpful. If asked something unrelated to Austin's portfolio, politely redirect to portfolio-related topics.

**Name:** ${name.first} ${name.last}
**Title:** ${title}
**Bio:** ${bio.short}
**Email:** ${contact.email}
**Phone:** ${contact.phone}
**Location:** ${contact.location}
**LinkedIn:** ${contact.linkedin || 'N/A'}
**Education:** ${education.degree} from ${education.institution} (${education.year})

**Experience:**
${experienceText}

**Skills:**
${skillsText}

**Projects:**
${projectsText}`;
};

const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: trimmed };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      const systemMessage: ChatMessage = {
        role: 'system',
        content: buildSystemPrompt(),
      };

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            systemMessage,
            ...updatedMessages.map((m) => ({
              role: m.role,
              content: m.content,
            })),
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      const assistantContent =
        data.content || 'Sorry, I could not generate a response.';

      setMessages([
        ...updatedMessages,
        { role: 'assistant', content: assistantContent },
      ]);
    } catch {
      setMessages([
        ...updatedMessages,
        {
          role: 'assistant',
          content: 'Sorry, something went wrong. Please try again later.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating chat button */}
      <motion.div
        className="fixed bottom-20 right-4 z-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close chat' : 'Open AI chat assistant'}
          variant="outline"
          size="icon"
          className={`rounded-full shadow-lg backdrop-blur-md transition-all duration-300 h-12 w-12 ${
            isDark
              ? 'bg-blue-600 border-blue-500 hover:bg-blue-500 text-white'
              : 'bg-blue-500 border-blue-400 hover:bg-blue-400 text-white'
          }`}
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
          </motion.div>
        </Button>
      </motion.div>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`fixed bottom-36 right-4 z-50 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl shadow-2xl border backdrop-blur-xl flex flex-col ${
              isDark
                ? 'bg-gray-900/95 border-gray-700/50'
                : 'bg-white/95 border-gray-200'
            }`}
            style={{ height: '480px' }}
          >
            {/* Header */}
            <div
              className={`flex items-center justify-between px-4 py-3 border-b rounded-t-2xl ${
                isDark
                  ? 'border-gray-700/50 bg-gray-800/50'
                  : 'border-gray-200 bg-gray-50/50'
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span
                  className={`font-semibold text-sm ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  AI Assistant
                </span>
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="icon"
                className={`h-8 w-8 rounded-full ${
                  isDark
                    ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200'
                }`}
              >
                <X size={16} />
              </Button>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 px-4 py-3">
              {messages.length === 0 && (
                <div
                  className={`text-center py-8 text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}
                >
                  <MessageCircle
                    size={32}
                    className="mx-auto mb-3 opacity-50"
                  />
                  <p className="font-medium mb-1">Hi! I'm Austin's AI assistant.</p>
                  <p className="text-xs opacity-75">
                    Ask me about his skills, experience, or projects.
                  </p>
                </div>
              )}

              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`mb-3 flex ${
                    msg.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white rounded-br-md'
                        : isDark
                          ? 'bg-gray-800 text-gray-200 rounded-bl-md border border-gray-700/50'
                          : 'bg-gray-100 text-gray-800 rounded-bl-md border border-gray-200'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="mb-3 flex justify-start">
                  <div
                    className={`rounded-2xl rounded-bl-md px-4 py-3 ${
                      isDark
                        ? 'bg-gray-800 border border-gray-700/50'
                        : 'bg-gray-100 border border-gray-200'
                    }`}
                  >
                    <Loader2
                      size={16}
                      className={`animate-spin ${
                        isDark ? 'text-blue-400' : 'text-blue-500'
                      }`}
                    />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </ScrollArea>

            {/* Input */}
            <div
              className={`px-3 py-3 border-t rounded-b-2xl ${
                isDark
                  ? 'border-gray-700/50 bg-gray-800/30'
                  : 'border-gray-200 bg-gray-50/30'
              }`}
            >
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about Austin..."
                  disabled={isLoading}
                  className={`flex-1 rounded-xl px-3 py-2 text-sm outline-none border transition-colors ${
                    isDark
                      ? 'bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500'
                      : 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-blue-400'
                  }`}
                />
                <Button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  size="icon"
                  className={`h-9 w-9 rounded-xl ${
                    isDark
                      ? 'bg-blue-600 hover:bg-blue-500 text-white'
                      : 'bg-blue-500 hover:bg-blue-400 text-white'
                  }`}
                >
                  <Send size={14} />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatWidget;
