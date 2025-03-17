import { SitemapStream, streamToPromise } from 'sitemap';
import { writeFileSync } from 'fs';

// Definir las rutas que usas en React Router Dom
const routes = [
  { path: '/', priority: 1.0 },
  { path: '/about-us', priority: 0.8 },
  { path: '/portfolio', priority: 0.8 },
  { path: '/portfolio/smive', priority: 0.8 },
  { path: '/portfolio/odontologia-c.i.o.s.', priority: 0.8 },
  { path: '/contact', priority: 0.8 },
  { path: '/ask-us', priority: 0.8 },
];

const sitemap = new SitemapStream({ hostname: 'https://stakedev.net' });

routes.forEach(route => {
  sitemap.write({ url: route.path, changefreq: 'daily', priority: route.priority });
});

sitemap.end();

streamToPromise(sitemap).then(data => {
  writeFileSync('./public/sitemap.xml', data.toString());
  console.log('✅ Sitemap generado correctamente.');
});
