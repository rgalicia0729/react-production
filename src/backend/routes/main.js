import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import render from '../render';
import serverRoutes from '../../frontend/routes/serverRoutes';

const main = (req, res, next) => {
  try {
    const html = renderToString(
      <StaticRouter location={req.url} context={{}}>
        {renderRoutes(serverRoutes())}
      </StaticRouter>,
    );
    res.send(render(html));
  } catch (error) {
    next(error);
  }
};

export default main;
