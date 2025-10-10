import React from 'react';
import ReactDOM from 'react-dom/client';

// import './index.css';
import './style.css';
// import './sass/style'
import App from './App';
import reportWebVitals from './reportWebVitals';

// const myElement = React.createElement('h1', {}, 'Hallo')
// const myElement = <h1>React is {5 + 5} times better with JSX</h1>;

// const cars = ['Fords', 'BMW', 'Mazda']
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // myElement
  // <React.StrictMode>
    <App/>
  // </React.StrictMode>
);

reportWebVitals();
