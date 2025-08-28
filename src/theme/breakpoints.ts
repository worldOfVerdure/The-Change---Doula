import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
   interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;   // ✅ Add this
    xxxl: true;  // ✅ And this
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,      // default
      sm: 600,    // default
      md: 900,    // default
      lg: 1200,   // default
      xl: 1536,   // default
      xxl: 1920,  // custom
      xxxl: 2500, // custom
    },
  },
});

export default theme;
