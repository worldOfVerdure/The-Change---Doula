import Box from '@mui/material/Box';
import type { FC, HTMLAttributes } from 'react';
import heroImages from './headerHeroImg.ts';

interface HeaderProps extends HTMLAttributes<HTMLElement> {}

const heroSrcSet = heroImages.map(({src, width}) => `${src} ${width}w`).join(', ');

const Header: FC<HeaderProps> = () => {
  return (
    <Box
      component="header"
      sx={ theme => ({
        maxWidth: `${theme.breakpoints.values.xxxl}px`,
        width: '100%',
        [theme.breakpoints.up('xxxl')]: {
          mx: 'auto', // apply at custom breakpoint
        },
        '& img': {
          maxHeight: '80vh',
          objectFit: 'fill',
          width: '100%'
        }
      })}
    >
      <img 
        alt="The Change Doula, Menstrual Health and Menopause support"
        decoding="sync"
        fetchPriority="high"
        sizes="100vw"
        src={`${heroImages[11].src}`}
        srcSet={heroSrcSet}
      />
    </Box>
  );
}

export default Header;
