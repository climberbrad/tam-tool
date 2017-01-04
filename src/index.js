import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../public/css/index.css';

let contacts = [{
    id: 1,
    name: 'Nike',
    phone: '3451-2331-19696'
},
    {
        id: 2,
        name: 'GE',
        phone: '7720-2533-1993'
    },
    {
        id: 3,
        name: 'Palentir',
        phone: '7920-8233-2009'
    }]

ReactDOM.render(
  <App contacts={contacts}/>,
  document.getElementById('root')
);


