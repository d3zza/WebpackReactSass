import styles from './styles.module.scss';
import React from 'react';

function SubComponent({ msg = 'Hello' }) {
  return <p className="brownMessage subcomponent__message">{msg}</p>;
}

export default SubComponent;
