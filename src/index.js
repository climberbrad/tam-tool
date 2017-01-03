import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../public/css/index.css';


let contacts = [{
    id: 1,
    name: 'brad',
    phone: '720-233-1969'
},
    {
        id: 2,
        name: 'chica',
        phone: '720-233-1993'
    },
    {
        id: 3,
        name: 'eva',
        phone: '720-233-2009'
    }]

ReactDOM.render(
  <App contacts={contacts}/>,
  document.getElementById('root')
);
