import React, { useState } from "react";
import FacilityFinderMap from "../../components/FacilityFinderMap";
import Layout from '../../components/Layout';

const menuItems = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Facility Finder', path: '/dashboard/facility-finder' },
  { label: 'Uitdagingen', path: '/dashboard/uitdagingen' },
  { label: 'Richtingen', path: '/dashboard/richtingen' },
  { label: 'Drijfveren', path: '/dashboard/drijfveren' },
];

const statusOptions = [
  'Studeren',
  'Werk zoeken',
  'Werkend',
  'Stage zoeken',
];

export default function FacilityFinderDashboard({ user }) {
  return (
    <Layout user={user}>
      <div className="flex flex-row w-full min-h-[600px]">
        <FacilityFinderMap mode="platform" user={user} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  return { props: { user: { id: 1, name: 'Demo Gebruiker', role: 'candidate' } } };
} 