import React from 'react';
import Layout from '../components/Layout';

const Menu: React.FC = () => {
  return (
    <Layout>
      <main className="container mx-auto px-6 py-12 pt-32">
        <section className="text-center mb-16">
            <p className="text-sm text-accent font-semibold mb-2">CRAFTED FOR THE SENSES</p>
            <h1 className="text-6xl font-bold font-header">OUR MENU</h1>
            <p className="mt-4">Premium hookah blends, handcrafted cocktails, and upscale bites</p>
        </section>

        <section>
            <div className="flex justify-center space-x-8 mb-12 border-b border-gray-700">
                <a href="#hookah" className="nav-link py-4 border-b-2 border-accent">HOOKAH</a>
                <a href="#cocktails" className="nav-link py-4">COCKTAILS</a>
                <a href="#mocktails" className="nav-link py-4">MOCKTAILS</a>
                <a href="#bites" className="nav-link py-4">BITES</a>
            </div>

            <div id="hookah" className="mb-16">
                <h2 className="text-4xl font-bold text-center mb-8 font-header">HOOKAH</h2>
                <p className="text-center mb-12">Premium shisha blends sourced from the finest tobacco houses</p>
                <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
                    <div>
                        <div className="flex justify-between">
                            <h3 className="text-xl font-semibold">Blue Mist <span className="text-xs bg-cyan-500 text-black px-2 py-1 rounded">Signature</span></h3>
                            <p className="text-xl font-semibold text-accent">$35</p>
                        </div>
                        <p className="text-gray-400">Blueberry, mint, and a hint of ice — our signature blend</p>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <h3 className="text-xl font-semibold">Desert Rose</h3>
                            <p className="text-xl font-semibold text-accent">$35</p>
                        </div>
                        <p className="text-gray-400">Rose water, lychee, and light floral notes</p>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <h3 className="text-xl font-semibold">Midnight Citrus <span className="text-xs bg-cyan-500 text-black px-2 py-1 rounded">Popular</span></h3>
                            <p className="text-xl font-semibold text-accent">$35</p>
                        </div>
                        <p className="text-gray-400">Blood orange, lemon zest, and cool exhale</p>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <h3 className="text-xl font-semibold">Royal Grape</h3>
                            <p className="text-xl font-semibold text-accent">$35</p>
                        </div>
                        <p className="text-gray-400">Double apple and Concord grape — a classic elevated</p>
                    </div>
                </div>
            </div>

            <div id="cocktails" className="mb-16">
                <h2 className="text-4xl font-bold text-center mb-8 font-header">COCKTAILS</h2>
                <p className="text-center mb-12">Handcrafted cocktails by our award-winning mixologists</p>
                <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
                    <div>
                        <div className="flex justify-between">
                            <h3 className="text-xl font-semibold">Bloo Negroni <span className="text-xs bg-cyan-500 text-black px-2 py-1 rounded">Signature</span></h3>
                            <p className="text-xl font-semibold text-accent">$18</p>
                        </div>
                        <p className="text-gray-400">Gin, Campari, sweet vermouth, blue butterfly pea flower</p>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <h3 className="text-xl font-semibold">Neon Margarita</h3>
                            <p className="text-xl font-semibold text-accent">$16</p>
                        </div>
                        <p className="text-gray-400">Tequila blanco, blue curaçao, lime, salted rim</p>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <h3 className="text-xl font-semibold">Midnight Mule <span className="text-xs bg-cyan-500 text-black px-2 py-1 rounded">Popular</span></h3>
                            <p className="text-xl font-semibold text-accent">$15</p>
                        </div>
                        <p className="text-gray-400">Vodka, ginger beer, blackberry, fresh lime</p>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <h3 className="text-xl font-semibold">Smoke & Mirrors</h3>
                            <p className="text-xl font-semibold text-accent">$19</p>
                        </div>
                        <p className="text-gray-400">Mezcal, elderflower, cucumber, activated charcoal salt</p>
                    </div>
                </div>
            </div>
        </section>
      </main>
    </Layout>
  );
};

export default Menu;
