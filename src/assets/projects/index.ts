// Import your project images here
// Place your actual project screenshots in src/assets/projects/

// Import your actual project image (add pongpds.png to src/assets/projects/)
import pongpdsImg from './pongpds.png';
import narutorunDollImg from './narutorunDoll.gif';

// For now, using a placeholder for PongPDS until you add the actual screenshot
export const projectImages = {
  pongpds: pongpdsImg,
  narutorunDoll: narutorunDollImg,
} as const;

// Type for imported images
export type ProjectImageKey = keyof typeof projectImages;

