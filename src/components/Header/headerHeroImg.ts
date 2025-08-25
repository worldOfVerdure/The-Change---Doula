import Hero600 from '../../assets/heroImg/hero-600.webp';
import Hero900 from '../../assets/heroImg/hero-900.webp';
import Hero1200 from '../../assets/heroImg/hero-1200.webp';
import Hero1536 from '../../assets/heroImg/hero-1536.webp';
import Hero1800 from '../../assets/heroImg/hero-1800.webp';
import Hero1920 from '../../assets/heroImg/hero-1920.webp';
import Hero2400 from '../../assets/heroImg/hero-2400.webp';
import Hero2700 from '../../assets/heroImg/hero-2700.webp';
import Hero3072 from '../../assets/heroImg/hero-3072.webp';
import Hero3600 from '../../assets/heroImg/hero-3600.webp';
import Hero3840 from '../../assets/heroImg/hero-3840.webp';
import Hero4605 from '../../assets/heroImg/hero-4605.webp';
import Hero5760 from '../../assets/heroImg/hero-5760.webp';
import Hero6884 from '../../assets/heroImg/hero-6884.webp';

type HeroImage = {
  src: string;
  width: number;
}

const heroImages: HeroImage[] = [
  {src: Hero600, width: 600},
  {src: Hero900, width: 900},
  {src: Hero1200, width: 1200},
  {src: Hero1536, width: 1536},
  {src: Hero1800, width: 1800},
  {src: Hero1920, width: 1920},
  {src: Hero2400, width: 2400},
  {src: Hero2700, width: 2700},
  {src: Hero3072, width: 3072},
  {src: Hero3600, width: 3600},
  {src: Hero3840, width: 3840},
  {src: Hero4605, width: 4605},
  {src: Hero5760, width: 5760},
  {src: Hero6884, width: 6884},
] as const;

export default heroImages;
