import React, { useState } from 'react';
import { Mail, Send, MessageSquare } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:imambprasojo@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-blue-500/20">
            <h3 className="text-xl font-semibold mb-6 text-blue-300">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg">
                <Mail className="text-blue-400" />
                <span className="text-gray-300">imambprasojo@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg">
                <MessageSquare className="text-purple-400" />
                <span className="text-gray-300">Available for collaborations</span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-purple-500/20">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-blue-300">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-blue-300">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-blue-300">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600/80 hover:bg-blue-700 py-3 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105 backdrop-blur-sm"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}