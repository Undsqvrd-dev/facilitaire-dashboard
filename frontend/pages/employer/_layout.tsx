import React from 'react';
import { useRouter } from 'next/router';
import { FiUser, FiLogOut } from 'react-icons/fi';
import * as Icons from 'react-icons/fi';

const menuItems = [
  { label: 'Dashboard', path: '/employer/dashboard', icon: 'FiHome' },
  { label: 'Employer branding', path: '/employer/branding', icon: 'FiTrendingUp' },
  { label: 'Mijn vacatures', path: '/employer/vacancies', icon: 'FiBriefcase' },
  { label: 'Nieuwe vacature', path: '/employer/new-vacancy', icon: 'FiPlusCircle' },
  { label: 'Mijn team', path: '/employer/team', icon: 'FiUsers' },
];

export default function EmployerLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <div className="min-h-screen flex bg-[#F9FAFB]">
      {/* Sidebar */}
      <aside className="w-72 min-h-screen bg-white rounded-tl-3xl rounded-bl-3xl shadow-lg flex flex-col justify-between py-10 px-8 mr-8" style={{ borderTopLeftRadius: '2rem', borderBottomLeftRadius: '2rem' }}>
        <div>
          <div className="flex items-center gap-2 mb-10">
            <img src="/acme-logo.svg" alt="Logo" className="h-8 w-auto" />
          </div>
          <div className="mb-8">
            <div className="text-gray-500 text-sm mb-1">Welkom!</div>
            <div className="font-semibold text-lg text-gray-800">Demo Gebruiker</div>
            <div className="text-xs text-gray-400">Bedrijf: Demo Company</div>
          </div>
          <nav className="flex flex-col gap-1">
            {menuItems.map(item => {
              const Icon = Icons[item.icon];
              return (
                <button
                  key={item.label}
                  className={`flex items-center gap-2 text-left px-4 py-2 rounded-lg font-medium transition-all duration-150 ${router.pathname === item.path ? 'text-gray-900 font-bold bg-gray-100' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}
                  onClick={() => router.push(item.path)}
                >
                  <Icon className="w-5 h-5" /> {item.label}
                </button>
              );
            })}
          </nav>
        </div>
        <div className="flex flex-col gap-2 mb-2">
          <button
            className="flex items-center gap-2 text-left px-4 py-2 rounded-lg font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition"
            onClick={() => router.push('/profiel')}
          >
            <FiUser className="w-5 h-5" /> Mijn profiel
          </button>
          <button
            className="flex items-center gap-2 text-left px-4 py-2 rounded-lg font-medium text-red-500 hover:bg-red-50 hover:text-red-700 transition"
            onClick={() => {/* Uitlog functionaliteit */}}
          >
            <FiLogOut className="w-5 h-5" /> Uitloggen
          </button>
        </div>
      </aside>
      {/* Main content */}
      <main className="flex-1 flex flex-col py-10 pr-10">
        {children}
      </main>
    </div>
  );
} 