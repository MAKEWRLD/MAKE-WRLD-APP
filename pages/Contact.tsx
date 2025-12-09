import React from 'react';
import { Mail, Globe, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 flex items-center justify-center">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 animate-slide-up">
        
        <div className="space-y-8">
            <h2 className="text-5xl font-bold tracking-tighter text-white">ENTRE EM CONTATO</h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
                Para reservas, colaborações ou informações de imprensa, entre em contato diretamente com a equipe.
            </p>
            
            <div className="space-y-6 pt-4">
                <div className="flex items-center gap-4 text-gray-300 group">
                    <div className="p-3 bg-zinc-900 rounded-full text-white group-hover:bg-white group-hover:text-black transition-colors">
                        <Mail size={24} />
                    </div>
                    <div>
                        <p className="text-xs uppercase text-gray-500 font-bold tracking-widest">Email</p>
                        <a href="mailto:makewrld73@gmail.com" className="text-xl hover:text-white transition-colors">makewrld73@gmail.com</a>
                    </div>
                </div>

                <div className="flex items-center gap-4 text-gray-300 group">
                    <div className="p-3 bg-zinc-900 rounded-full text-white group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                        <MessageCircle size={24} />
                    </div>
                    <div>
                        <p className="text-xs uppercase text-gray-500 font-bold tracking-widest">WhatsApp</p>
                        <a href="https://wa.me/244931541130" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-white transition-colors">
                          +244 931 541 130
                        </a>
                    </div>
                </div>
                
                <div className="flex items-center gap-4 text-gray-300 group">
                     <div className="p-3 bg-zinc-900 rounded-full text-white group-hover:bg-white group-hover:text-black transition-colors">
                        <Globe size={24} />
                    </div>
                    <div>
                         <p className="text-xs uppercase text-gray-500 font-bold tracking-widest">Redes Sociais</p>
                         <p className="text-xl">@makewrld</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-zinc-900/50 p-8 rounded-sm border border-white/5 backdrop-blur-sm">
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Mensagem enviada (demo)!'); }}>
                <div>
                    <label className="block text-xs uppercase text-gray-500 font-bold tracking-widest mb-2">Nome</label>
                    <input type="text" className="w-full bg-black/50 border border-white/10 p-3 text-white focus:border-white focus:outline-none transition-colors" placeholder="Seu Nome" required />
                </div>
                <div>
                    <label className="block text-xs uppercase text-gray-500 font-bold tracking-widest mb-2">Email</label>
                    <input type="email" className="w-full bg-black/50 border border-white/10 p-3 text-white focus:border-white focus:outline-none transition-colors" placeholder="seu@email.com" required />
                </div>
                <div>
                    <label className="block text-xs uppercase text-gray-500 font-bold tracking-widest mb-2">Mensagem</label>
                    <textarea rows={4} className="w-full bg-black/50 border border-white/10 p-3 text-white focus:border-white focus:outline-none transition-colors" placeholder="Escreva sua mensagem..." required></textarea>
                </div>
                <button type="submit" className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                    Enviar Mensagem <Send size={16} />
                </button>
            </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;