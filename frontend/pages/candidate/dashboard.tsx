import React, { useState } from 'react';
import Layout from '../../components/Layout';

export default function CandidateDashboard({ user }) {
  const [status, setStatus] = useState('Studeren');
  return (
    <Layout user={user}>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
        {/* Status & voortgang */}
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-gray-500 text-sm mb-1">Status</div>
              <select
                className="font-semibold text-lg bg-transparent outline-none"
                value={status}
                onChange={e => setStatus(e.target.value)}
              >
                <option>Studeren</option>
                <option>Werk zoeken</option>
                <option>Werkend</option>
                <option>Stage zoeken</option>
              </select>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col gap-4">
          <div className="text-gray-500 text-sm mb-1">Studie voortgang</div>
          <div className="flex items-center gap-4">
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-purple-500 to-blue-400 h-3 rounded-full" style={{ width: '45%' }} />
            </div>
            <span className="font-semibold text-purple-600">45%</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
        {/* Personal brand */}
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
          <div className="text-gray-700 font-semibold mb-2">personal brand</div>
          {/* Radar chart placeholder */}
          <div className="w-64 h-64 bg-gray-50 rounded-xl flex items-center justify-center mb-2">
            <span className="text-gray-400">[Radar Chart]</span>
          </div>
          <a href="#" className="text-blue-600 text-sm hover:underline">Mijn drijfveren &gt;</a>
        </div>
        {/* Kaart */}
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
          <div className="text-gray-700 font-semibold mb-2">&nbsp;</div>
          <div className="w-full h-64 bg-gray-100 rounded-xl flex items-center justify-center">
            <span className="text-gray-400">[Kaart met bedrijven]</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Facilitaire uitdagingen */}
        <div className="bg-white rounded-2xl shadow p-6">
          <div className="font-semibold text-lg mb-4">Facilitaire uitdagingen</div>
          <div className="flex flex-col gap-4">
            <div className="border rounded-xl p-4 flex items-center justify-between">
              <div>
                <div className="font-medium">Facilitair coördinator</div>
                <div className="text-gray-500 text-sm">Deventer &bull; Full-time</div>
              </div>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Per direct beschikbaar</span>
            </div>
            <div className="border rounded-xl p-4 flex items-center justify-between">
              <div>
                <div className="font-medium">Facilitair coördinator</div>
                <div className="text-gray-500 text-sm">Deventer &bull; Full-time</div>
              </div>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Per direct beschikbaar</span>
            </div>
          </div>
          <button className="mt-6 w-full bg-blue-600 text-white rounded-full py-2 font-semibold hover:bg-blue-700 transition">Alle uitdagingen bekijken</button>
        </div>
        {/* Richtingen */}
        <div className="bg-white rounded-2xl shadow p-6">
          <div className="font-semibold text-lg mb-4">Richtingen ontdekken binnen Facility Management</div>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 cursor-pointer">Eventmanagement <span className="text-gray-400 text-xl">+</span></li>
            <li className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 cursor-pointer">Inkoop & contractmanagement <span className="text-gray-400 text-xl">+</span></li>
            <li className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 cursor-pointer">Hospitality <span className="text-gray-400 text-xl">+</span></li>
            <li className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 cursor-pointer">Projectondersteuning <span className="text-gray-400 text-xl">+</span></li>
            <li className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 cursor-pointer">Accountmanagement <span className="text-gray-400 text-xl">+</span></li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  return { props: { user: { id: 1, name: 'Demo Gebruiker', role: 'candidate' } } };
} 