import { createTheme } from '@mui/material/styles';
import customBreakpoints from './breakpoints.ts';

const customTheme = createTheme({
  breakpoints: { values: customBreakpoints },
  // Add other slices here (e.g. spacing, shape, components)
});

export default customTheme;
