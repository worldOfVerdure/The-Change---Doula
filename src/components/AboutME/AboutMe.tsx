import Portrait from './Portrait.tsx';
import { Stack, Typography} from '@mui/material';

const AboutMe = () => {
  return (
    <Stack
      alignItems="center"
      component="section"
      direction={{xs: 'column', md: 'row'}}
      spacing={4}
       sx={{
        px: { xs: 2, md: 4 },
        py: { xs: 4, md: 8 },
      }}
    >
      {/* Heading */}
      <Typography
        sx={{ flexShrink: 0, textAlign: { xs: 'center', md: 'left' } }}
        variant="h1"
      >
        {title} {/* Need title here */}
      </Typography>
      <Stack>
        {/* Image */}
      <Box 
        alt={imageAlt}
        component="img"
        sizes=" "
        src= " "
        srcSet=" "
        sx={{
          width: { xs: '100%', md: '40%' },
          borderRadius: 2,
          objectFit: 'fill'
        }}
      />
      </Stack>
    </Stack>
  );
}
