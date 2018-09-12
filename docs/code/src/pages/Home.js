import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Intro from '../components/Intro';
import DemoCalendar from '../components/DemoCalendar';
import Documentation from '../components/Documentation';
import Footer from '../components/Footer';

import '../styles/Home.css';

const Home = () => (
  <div className="bodyContainer">
    <Header />
    <Navigation />
    <Intro />
    <DemoCalendar />
    <Documentation />
    <Footer />
  </div>
);

export default Home;
