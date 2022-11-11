import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes'

import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


