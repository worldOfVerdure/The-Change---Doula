// Tell TS we’re extending MUI’s breakpoint keys
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;   // your custom
    xxxl: true;  // your custom
  }
}
