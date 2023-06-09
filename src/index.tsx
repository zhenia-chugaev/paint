import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import ThemeProvider from './providers/ThemeProvider';
import { initializeApp } from 'firebase/app';
import store from './slices';
import router from './routes';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';

const firebaseConfig = JSON.parse(
  process.env.REACT_APP_FIREBASE_CONFIG as string
);

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ThemeProvider>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>
);
