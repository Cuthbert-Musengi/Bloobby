import React from 'react';
import Layout from '../components/Layout';

const Careers: React.FC = () => {
  return (
    <Layout>
      <main className="container mx-auto px-6 py-12 pt-32">
        <section className="text-center mb-16">
            <p className="text-sm text-accent font-semibold mb-2">JOIN THE TEAM</p>
            <h1 className="text-6xl font-bold font-header">CAREERS</h1>
            <p className="mt-4">Be part of something electric — we're always looking for passionate people to elevate the Bloo Lounge experience</p>
        </section>

        <section className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-8 font-header">OPEN POSITIONS</h2>
            <div className="space-y-4">
                <div className="border border-accent p-4">
                    <h3 className="text-xl font-semibold">Hookah Specialist <span className="text-xs bg-cyan-500 text-black px-2 py-1 rounded">Full-Time</span></h3>
                </div>
                <div className="border border-accent p-4">
                    <h3 className="text-xl font-semibold">Mixologist / Bartender <span className="text-xs bg-cyan-500 text-black px-2 py-1 rounded">Full-Time</span></h3>
                </div>
                <div className="border border-accent p-4">
                    <h3 className="text-xl font-semibold">Host / Hostess <span className="text-xs bg-cyan-500 text-black px-2 py-1 rounded">Part-Time</span></h3>
                </div>
            </div>
        </section>

        <section>
            <h2 className="text-4xl font-bold text-center mb-8 font-header">DON'T SEE YOUR ROLE?</h2>
            <p className="text-center mb-8">We're always open to exceptional talent. Send us your details and tell us how you'd elevate the Bloo Lounge experience.</p>
            <form className="max-w-xl mx-auto">
                <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Full Name *" className="bg-black/30 border border-white/10 focus:border-accent rounded-xl p-3 outline-none transition w-full" />
                    <input type="email" placeholder="Email Address *" className="bg-black/30 border border-white/10 focus:border-accent rounded-xl p-3 outline-none transition w-full" />
                    <input type="tel" placeholder="Phone Number" className="bg-black/30 border border-white/10 focus:border-accent rounded-xl p-3 outline-none transition w-full" />
                    <input type="text" placeholder="Position Applying For *" className="bg-black/30 border border-white/10 focus:border-accent rounded-xl p-3 outline-none transition w-full" />
                </div>
                <textarea placeholder="Tell us about yourself" className="bg-black/30 border border-white/10 focus:border-accent rounded-xl p-3 outline-none transition w-full mt-4 h-32"></textarea>
                <button type="submit" className="border border-accent text-accent hover:bg-accent hover:text-black transition-all duration-300 scale-100 hover:scale-105 rounded-full px-8 py-3 mt-4 w-full">SUBMIT APPLICATION</button>
            </form>
        </section>
      </main>
    </Layout>
  );
};

export default Careers;
