import React from 'react';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section min-h-screen flex flex-col justify-center items-center relative text-center" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight neon-text-glow uppercase">BLOO LOUNGE</h1>
          <p className="text-xl mt-4 mb-8">LUXURY HOOKAH & MODERN BAR</p>
          <div className="flex space-x-4 justify-center">
            <a href="/reservations" className="border border-accent text-accent hover:bg-accent hover:text-black transition-all duration-300 scale-100 hover:scale-105 rounded-full px-8 py-3">RESERVE A TABLE</a>
            <a href="/menu" className="border border-accent text-accent hover:bg-accent hover:text-black transition-all duration-300 scale-100 hover:scale-105 rounded-full px-8 py-3">VIEW MENU</a>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/images/about.png" alt="People at the lounge" className="w-full h-auto" />
          </div>
          <div className="text-center md:text-left">
            <p className="text-sm text-accent font-semibold mb-2">EXPERIENCE</p>
            <h2 className="text-4xl font-bold mb-4 font-header">WELCOME TO BLOO LOUNGE</h2>
            <p className="mb-6">Step into an atmosphere unlike any other. Bloo Lounge blends the ancient art of hookah with a modern, upscale bar experience - crafted for those who appreciate the finer things in nightlife. Premium shisha blends, handcrafted cocktails, and an ambiance that sets the standard.</p>
            <a href="/menu" className="border border-accent text-accent hover:bg-accent hover:text-black transition-all duration-300 scale-100 hover:scale-105 rounded-full px-8 py-3">EXPLORE MENU</a>
          </div>
        </div>
      </section>

      {/* Help Finding Us Section */}
      <section className="container mx-auto px-6 py-24 text-center">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-6 hover:border-accent/30 transition-all">
            <a href="/reservations" className="text-white font-semibold py-3 px-8 inline-block w-full md:w-auto">RESERVATION</a>
          </div>
          <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-6 hover:border-accent/30 transition-all">
            <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="text-white font-semibold py-3 px-8 inline-block w-full md:w-auto">DIRECTIONS</a>
          </div>
          <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-6 hover:border-accent/30 transition-all">
            <a href="tel:123-456-7890" className="text-white font-semibold py-3 px-8 inline-block w-full md:w-auto">CALL US</a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <p className="text-sm text-accent font-semibold mb-2">GUEST EXPERIENCES</p>
          <h2 className="text-4xl font-bold font-header">WHAT PEOPLE ARE SAYING</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-6 hover:border-accent/30 transition-all">
            <p className="mb-4">"Bloo Lounge is on another level. The hookah was perfectly prepared, the cocktails were creative, and the atmosphere had this electric energy I've never felt anywhere else. Absolutely coming back."</p>
            <p className="font-semibold">Aaliyah M.</p>
          </div>
          <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-6 hover:border-accent/30 transition-all">
            <p className="mb-4">"We celebrated my birthday here and the staff made it unforgettable. VIP treatment from the moment we walked in. The neon ambiance, the music, the service - everything was flawless."</p>
            <p className="font-semibold">Marcus T.</p>
          </div>
          <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-6 hover:border-accent/30 transition-all">
            <p className="mb-4">"I've been to lounges all over the city and nothing compares. The shisha selection is premium, the staff knows their craft, and the vibe is sophisticated without being pretentious."</p>
            <p className="font-semibold">Priya S.</p>
          </div>
        </div>
      </section>

      {/* Join The Team Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4 font-header">JOIN THE TEAM</h2>
            <p className="mb-6">We're always looking for passionate, driven individuals to be part of the Bloo Lounge family. Whether you're a mixologist, server, or hospitality professional - if you thrive in a high-energy, luxury environment, we want to hear from you.</p>
            <a href="/careers" className="border border-accent text-accent hover:bg-accent hover:text-black transition-all duration-300 scale-100 hover:scale-105 rounded-full px-8 py-3">VIEW CAREERS</a>
          </div>
          <div>
            <img src="/images/team.png" alt="Team at the lounge" className="w-full h-auto" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
