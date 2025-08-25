import { CssBaseline } from '@mui/material';
import { Global, css } from '@emotion/react';
import Header from './components/Header/Header.tsx';

function App() {
  return (
    <>
      <CssBaseline />
      <Global
        styles={css`
          html {
            font-size: 62.5%;
          }
          body {
            background-color: #F8f4da;
            font-size: 1.6rem;
          }
        `}
      />
      <Header />
    </>
  );
}

export default App;
