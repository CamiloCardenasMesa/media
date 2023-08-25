import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/**
lo que voy a usar:

@faker-js/faker: librería para generar data aletoriamente 
@reduxjs/toolkit: Redux-toolkit
axios: lo usaré para obtener la data (Data Fetch)
classnames: para manejar propiedades
json-server: con este creo el servidor api, ejecutarlo, recibir peticiones, guardarlas etc.
react-icons: librería para mostrar íconos
*/ 
