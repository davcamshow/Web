import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

interface FloatingContactProps {
  isOpen: boolean;
  onClose: () => void;
}

const FloatingContact: React.FC<FloatingContactProps> = ({ isOpen, onClose }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus(null);

    try {
      // Tus credenciales de EmailJS
      const result = await emailjs.sendForm(
        'service_k2fv64j', // Service ID
        'template_n7tb9ng', // ⚠️ NECESITAS CREAR UN TEMPLATE PRIMERO
        formRef.current!,
        '1mY5X4HhWsgrWCqSW' // Public Key
      );

      if (result.text === 'OK') {
        setSendStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          onClose();
          setSendStatus(null);
        }, 2000);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSendStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay con blur */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-[#faf7f2] w-full max-w-lg rounded-2xl shadow-2xl transform transition-all duration-500 scale-100">
        {/* Fondo con cuadrícula */}
        <div 
          className="absolute inset-0 rounded-2xl overflow-hidden opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, #8b7355 1px, transparent 1px), linear-gradient(to bottom, #8b7355 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
        
        {/* Gradientes */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#d9b99b]/20 via-transparent to-[#8b7355]/20 rounded-2xl"></div>
        
        {/* Elementos decorativos */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#d9b99b] rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#b89b7a] rounded-full opacity-20 blur-3xl"></div>
        </div>

        {/* Contenido */}
        <div className="relative p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#8b7355] hover:text-[#3a3229] transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <h2 className="text-3xl font-light text-[#3a3229] mb-2">Contacto</h2>
          <p className="text-[#8b7355] font-light mb-6">¿Tienes un proyecto en mente? Hablemos.</p>

          {sendStatus === 'success' && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-center animate-pulse">
              ✉️ ¡Mensaje enviado con éxito! Te responderé pronto.
            </div>
          )}

          {sendStatus === 'error' && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-center">
              ❌ Error al enviar el mensaje. Por favor intenta de nuevo.
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-[#5c4e3d] mb-1 font-light">
                NOMBRE
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-transparent border border-[#d9b99b] rounded-lg focus:border-[#b89b7a] focus:outline-none transition-colors text-[#3a3229]"
                placeholder="Tu nombre"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm text-[#5c4e3d] mb-1 font-light">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-transparent border border-[#d9b99b] rounded-lg focus:border-[#b89b7a] focus:outline-none transition-colors text-[#3a3229]"
                placeholder="tu@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm text-[#5c4e3d] mb-1 font-light">
                MENSAJE
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 bg-transparent border border-[#d9b99b] rounded-lg focus:border-[#b89b7a] focus:outline-none transition-colors text-[#3a3229] resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSending}
              className="w-full group relative px-6 py-3 bg-[#8b7355] text-[#faf7f2] hover:bg-[#6b5b4b] transition-all duration-500 text-sm overflow-hidden rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 flex items-center justify-center">
                {isSending ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    ENVIANDO...
                  </>
                ) : (
                  <>
                    ENVIAR MENSAJE
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:ml-4">→</span>
                  </>
                )}
              </span>
              <span className="absolute inset-0 bg-[#b89b7a] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></span>
            </button>
          </form>

          {/* Información de contacto alternativa */}
          <div className="mt-6 pt-6 border-t border-[#d9b99b] text-center">
            <p className="text-xs text-[#8b7355] font-light">
              O escríbeme directamente a:
            </p>
            <a 
              href="mailto:davidbarrerareyes.14.dbr@gmail.com"
              className="text-sm text-[#3a3229] hover:text-[#8b7355] transition-colors duration-300"
            >
              davidbarrerareyes.14.dbr@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingContact;