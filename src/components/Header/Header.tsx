import type { FC, HTMLAttributes } from 'react';
import heroImages from './headerHeroImg.ts';
import styled from '@emotion/styled';

interface HeaderProps extends HTMLAttributes<HTMLElement> {}

const heroSrcSet = heroImages.map(({src, width}) => `${src} ${width}w`).join(', ');

const StyledHeader = styled.header`
  max-width: 250rem;
  width: 100%;

  @media (min-width: 2500px) {
    margin: 0 auto;
  }

  & img {
    max-height: 80vh;
    object-fit: fill;
    width: 100%;
  }
`;

const Header: FC<HeaderProps> = () => {
  return (
    <StyledHeader>
      <img 
        alt="The Change Doula, Menstrual Health and Menopause support"
        decoding="sync"
        fetchPriority="high"
        sizes="100vw"
        src={`${heroImages[11].src}`}
        srcSet={heroSrcSet}
      />
    </StyledHeader>
  );
}

export default Header;
