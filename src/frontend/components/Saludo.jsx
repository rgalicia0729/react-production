import React from 'react';
import logo from '../assets/images/react.png';

const Saludo = () => {
  return (
    <>
      <h1>Bienvenido a React</h1>
      <img src={logo} alt='Logo de React' width='600px' />
    </>
  );
};

export default Saludo;
