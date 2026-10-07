import React from 'react';
import Layout from '../components/Layout';

const Reservations: React.FC = () => {
  return (
    <Layout>
      <main className="container mx-auto px-6 py-12 pt-32">
        <section className="text-center mb-16">
            <p className="text-sm text-accent font-semibold mb-2">BOOK YOUR EXPERIENCE</p>
            <h1 className="text-6xl font-bold font-header">RESERVATIONS</h1>
            <p className="mt-4">Secure your table at Bloo Lounge — where every night is an occasion</p>
        </section>

        <section className="grid md:grid-cols-2 gap-16">
            <div>
                <h2 className="text-3xl font-bold mb-8 font-header">BOOK A TABLE</h2>
                <form>
                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="Full Name *" className="bg-black/30 border border-white/10 focus:border-accent rounded-xl p-3 outline-none transition w-full" />
                        <input type="email" placeholder="Email Address *" className="bg-black/30 border border-white/10 focus:border-accent rounded-xl p-3 outline-none transition w-full" />
                        <input type="tel" placeholder="Phone Number" className="bg-black/30 border border-white/10 focus:border-accent rounded-xl p-3 outline-none transition w-full" />
                        <input type="date" className="bg-black/30 border border-white/10 focus:border-accent rounded-xl p-3 outline-none transition w-full" />
                        <select className="bg-black/30 border border-white/10 focus:border-accent rounded-xl p-3 outline-none transition w-full">
                            <option>Select a time</option>
                        </select>
                        <select className="bg-black/30 border border-white/10 focus:border-accent rounded-xl p-3 outline-none transition w-full">
                            <option>Select party size</option>
                        </select>
                    </div>
                    <textarea placeholder="Special requests" className="bg-black/30 border border-white/10 focus:border-accent rounded-xl p-3 outline-none transition w-full mt-4 h-32"></textarea>
                    <button type="submit" className="border border-accent text-accent hover:bg-accent hover:text-black transition-all duration-300 scale-100 hover:scale-105 rounded-full px-8 py-3 mt-4 w-full">REQUEST RESERVATION</button>
                </form>
            </div>
            <div>
                <h2 className="text-3xl font-bold mb-8 font-header">HOURS</h2>
                <div className="space-y-4">
                    <div>
                        <p className="font-semibold">Monday – Thursday</p>
                        <p>6:00 PM – 2:00 AM</p>
                    </div>
                    <div>
                        <p className="font-semibold">Friday – Saturday</p>
                        <p>6:00 PM – 4:00 AM</p>
                    </div>
                    <div>
                        <p className="font-semibold">Sunday</p>
                        <p>7:00 PM – 1:00 AM</p>
                    </div>
                </div>
                <p className="mt-8 text-sm text-gray-400">Reservations are recommended. Walk-ins welcome based on availability.</p>
            </div>
        </section>
      </main>
    </Layout>
  );
};

export default Reservations;
