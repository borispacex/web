import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './features/i18n/i18n';
import App from './App';
import { initializeTheme } from './features/theme/theme';

initializeTheme();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
