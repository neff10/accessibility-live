import React from 'react';
import './Loader.css';

export default function Loader() {
  return (
    <div className="Loader">
      <div className="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
