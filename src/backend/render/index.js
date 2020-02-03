import dotenv from 'dotenv';
import getManifest from '../getManifest';

dotenv.config();

const files = getManifest();
const isProd = process.env.NODE_ENV === 'production';

const render = (html) => {
  return (`
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="${isProd ? files['main.css'] : 'assets/app.css'}" type="text/css"></link>
        <title>React Production</title>
      </head>
      <body>
        <section id="app">${html}</section>
        <script src="${isProd ? files['main.js'] : 'assets/app.js'}" type="text/javascript"></script>
        <script src="${isProd ? files['vendors.js'] : 'assets/vendor.js'}" type="text/javascript"></script>
      </body>
    </html>
  `);
};

export default render;
