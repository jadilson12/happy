/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import loadImg from '../images/logo.svg';

import '../styles/pages/landing.css';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={loadImg} alt="happer" />

        <main>
          <h1> Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Valparaiso de Goias</strong>
          <span>Goiás</span>
        </div>

        <Link to="/app" className="entre-app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6" />
        </Link>
      </div>
    </div>
  );
}

export default Landing;
