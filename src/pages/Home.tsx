import React from 'react';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Team } from '../components/sections/Team';
import { Projects } from '../components/sections/Projects';
import { Events } from '../components/sections/Events';
import { Gallery } from '../components/sections/Gallery';
import { Contact } from '../components/sections/Contact';

interface HomeProps {
  crtFxEnabled: boolean;
}

export const Home: React.FC<HomeProps> = ({ crtFxEnabled }) => {
  return (
    <main className="w-full space-y-4">
      <Hero crtFxEnabled={crtFxEnabled} />
      <About />
      <Team />
      <Projects />
      <Events />
      <Gallery />
      <Contact />
    </main>
  );
};

