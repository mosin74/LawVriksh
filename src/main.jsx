import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './app.css';
import App from './App.jsx';
import { CardProvider } from './context/CardContext';
import { ActivityProvider } from './context/ActivityContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardProvider>
      <ActivityProvider>
        <App />
      </ActivityProvider>
    </CardProvider>
  </StrictMode>
);
