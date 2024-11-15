import React from 'react';
import { Star } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Experience</h2>
        <div className="space-y-8">
          <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div>
                <h3 className="text-xl font-semibold text-blue-300">Core Team Member</h3>
                <p className="text-gray-400">Bakti Anugrah Company • Present</p>
              </div>
            </div>
            <ul className="list-none space-y-3">
              {[
                'Leading development of web applications and digital solutions',
                'Implementing modern software architecture and best practices',
                'Collaborating with cross-functional teams to deliver high-quality products',
                'Contributing to technical decision-making and strategic planning'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-300">
                  <Star size={16} className="mt-1 text-blue-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}