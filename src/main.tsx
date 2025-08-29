import App from './App.tsx';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/';


createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme} >
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>
);
