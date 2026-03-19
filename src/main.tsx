import { StrictMode } from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootEl = document.getElementById('root')!;

if (rootEl.innerHTML.trim().length > 0) {
  hydrateRoot(
    rootEl,
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  createRoot(rootEl).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
