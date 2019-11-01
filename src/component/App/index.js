import styles from './styles.scss';

import React from 'react';
import SubComponent from '../SubComponent';
import img from './omg.jpg';

function App() {
  return (
    <div className="app__container">
      <h1 className="app__header">Hello React Application</h1>
      <SubComponent msg="Greetings" />
      <img className="app__image" src={img} alt="" />
    </div>
  );
}

export default App;
