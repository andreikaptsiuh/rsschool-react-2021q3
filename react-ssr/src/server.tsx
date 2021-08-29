import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import App from './components/app';
import { store } from './shared/store/store';
import { renderTemplate } from './renderTemplate';

const PORT = 3000;

const app = express();

app.use(express.static('dist'));

/* app.get('/api/router-data', async (req, res) => {
  try {
    console.log('try');

    res.json((await fetchDataByUrl(req.query.url.toString())));
  } catch (err) {
    res.status(500).json({
      message: err.message,
      stack: err.stack,
    });
  }
}); */

app.get('*', async (req, res) => {
  const context = {};

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>,
  );

  res.send(
    renderTemplate({
      cssPath: 'main.css',
      jsPath: 'main.js',
      content,
    }),
  );
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
