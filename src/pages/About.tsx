import React from 'react';
import Layout from '../components/Layout';

const About: React.FC = () => {
  return (
    <Layout>
      <main className="container mx-auto px-6 py-12 pt-32">
        <section className="text-center mb-16">
            <p className="text-sm text-accent font-semibold mb-2">OUR STORY</p>
            <h1 className="text-6xl font-bold font-header">BEYOND THE VAPE</h1>
            <p className="mt-4 max-w-3xl mx-auto">Bloo Lounge was born from a vision to redefine the modern lounge experience. We sought to create a sanctuary where the timeless tradition of hookah meets the electric pulse of contemporary nightlife.</p>
        </section>

        <section className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div className="img-frame">
                <img src="/images/team.png" alt="The Bloo Lounge Team" className="w-full h-auto" />
            </div>
            <div>
                <h2 className="text-4xl font-bold mb-4 font-header">THE PHILOSOPHY</h2>
                <p className="mb-4">At our core is a commitment to excellence. Every detail, from our curated selection of premium shisha to the last drop in our handcrafted cocktails, is chosen with intention. We believe a night out should be an escape—an immersive experience that captivates the senses and creates lasting memories.</p>
                <p>Our space is designed to be both intimate and vibrant, a place where conversations flow as freely as the drinks. It's more than just a lounge; it's a destination.</p>
            </div>
        </section>

        <section className="text-center">
            <h2 className="text-4xl font-bold mb-8 font-header">MEET THE VISIONARIES</h2>
            <p className="max-w-2xl mx-auto mb-12">Our team is a collective of hospitality experts, master mixologists, and hookah connoisseurs dedicated to their craft. We live to create unforgettable moments and push the boundaries of what a lounge can be.</p>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                    <div className="w-48 h-48 mx-auto rounded-full bg-zinc-800 border-2 border-accent mb-4"></div>
                    <h3 className="text-xl font-semibold">ALEX 'THE ALCHEMIST' REID</h3>
                    <p className="text-accent">Lead Mixologist</p>
                </div>
                <div className="text-center">
                    <div className="w-48 h-48 mx-auto rounded-full bg-zinc-800 border-2 border-accent mb-4"></div>
                    <h3 className="text-xl font-semibold">JASMINE KHAN</h3>
                    <p className="text-accent">Head of Hookah</p>
                </div>
                <div className="text-center">
                    <div className="w-48 h-48 mx-auto rounded-full bg-zinc-800 border-2 border-accent mb-4"></div>
                    <h3 className="text-xl font-semibold">MARCO VELEZ</h3>
                    <p className="text-accent">Director of Ambiance</p>
                </div>
            </div>
        </section>
      </main>
    </Layout>
  );
};

export default About;
