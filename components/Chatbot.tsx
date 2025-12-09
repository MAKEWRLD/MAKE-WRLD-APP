import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { BIOGRAPHY_SECTIONS, RELEASES, VIDEOS, SOCIAL_LINKS } from '../constants';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Olá. Sou a IA do MAKE WRLD. Pergunte-me sobre músicas, vídeos ou a história do artista.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize Gemini Client
  // Using process.env.API_KEY as strictly required by guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const generateSystemContext = () => {
    // Construct a context string based on the actual site data
    const bioText = BIOGRAPHY_SECTIONS.map(b => b.content).join("\n");
    const releasesText = RELEASES.map(r => `${r.title} (${r.type}, ${r.year})`).join("; ");
    const videosText = VIDEOS.map(v => v.title).join("; ");
    
    return `
      Você é o assistente virtual oficial no website do artista "MAKE WRLD" (nome real: Milton Gomes Lemba).
      O seu objetivo é ajudar os fãs e visitantes a conhecer melhor o trabalho do artista.
      
      INFORMAÇÕES DO ARTISTA:
      Biografia: ${bioText}
      Discografia Oficial: ${releasesText}
      Vídeos Disponíveis: ${videosText}
      Contactos: WhatsApp +244 931 541 130, Email makewrld73@gmail.com
      Redes Sociais: Instagram, YouTube, Spotify, Apple Music.

      DIRETRIZES:
      1. Responda sempre em Português.
      2. Mantenha um tom "cool", artístico, ligeiramente misterioso mas muito prestável e educado.
      3. Seja conciso. Não dê respostas demasiado longas a menos que peçam detalhes.
      4. Se perguntarem sobre algo que não sabe (fora do contexto musical/artístico), diga que está aqui apenas para falar sobre o universo MAKE WRLD.
      5. O artista é de Viseu, Portugal, mas tem raízes em Angola (indicativo telefónico).
    `;
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // Create chat instance with specific model and system instruction
      const chat = ai.chats.create({
        model: 'gemini-3-pro-preview',
        config: {
          systemInstruction: generateSystemContext(),
        },
        history: messages.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        }))
      });

      const result = await chat.sendMessage({ message: userMessage });
      const responseText = result.text;

      if (responseText) {
        setMessages(prev => [...prev, { role: 'model', text: responseText }]);
      }
    } catch (error) {
      console.error("Erro no chat:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Desculpe, estou com dificuldades em conectar à rede neural. Tente novamente mais tarde." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
          isOpen ? 'bg-zinc-800 text-white rotate-90' : 'bg-white text-black'
        }`}
        aria-label="Abrir chat IA"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[90vw] md:w-96 h-[500px] max-h-[70vh] bg-black border border-white/20 rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden animate-fade-in backdrop-blur-sm bg-opacity-95">
          
          {/* Header */}
          <div className="p-4 border-b border-white/10 bg-zinc-900/50 flex items-center gap-2">
            <Sparkles size={16} className="text-purple-400" />
            <h3 className="font-bold text-white tracking-widest text-sm uppercase">MAKE WRLD AI</h3>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-lg text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-white text-black rounded-tr-none font-medium'
                      : 'bg-zinc-800 text-gray-200 rounded-tl-none border border-white/5'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 p-3 rounded-lg rounded-tl-none border border-white/5 flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-gray-400" />
                  <span className="text-xs text-gray-500">A processar...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-white/10 bg-zinc-900/30">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Pergunte sobre o artista..."
                className="flex-1 bg-black border border-white/10 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-white/40 placeholder-gray-600"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="p-2 bg-white text-black rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
