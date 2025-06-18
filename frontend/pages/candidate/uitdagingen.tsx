import React from "react";
import Layout from '../../components/Layout';

export default function UitdagingenDashboard({ user }) {
  return (
    <Layout user={user}>
      {/* Hier komt de content van de uitdagingenpagina */}
      <div>Uitdagingen content...</div>
    </Layout>
  );
}

export async function getServerSideProps() {
  return { props: { user: { id: 1, name: 'Demo Gebruiker', role: 'candidate' } } };
} 