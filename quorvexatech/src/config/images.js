/**
 * Page images. Replace any URL with your own (a file in /public such as "/images/hero.jpg"
 * works too). Every image has a built-in fallback illustration, so a broken URL never
 * leaves an empty hole in the layout.
 */
const unsplash = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const images = {
  home: unsplash('photo-1498050108023-c5249f4df085'),
  about: unsplash('photo-1522071820081-009f0129c71c'),
  services: unsplash('photo-1461749280684-dccba630e2f6'),
  projects: unsplash('photo-1460925895917-afdab827c52f'),
  contact: unsplash('photo-1553877522-43269d4ea984'),
  story: unsplash('photo-1517694712202-14dd9538aa97'),
};
