import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {children}
    </div>,
    document.getElementById('modal')
  );
}

export { Modal };