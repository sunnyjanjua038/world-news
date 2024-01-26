const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/news', // Specify the endpoint you want to proxy (change this to match your API endpoint)
    createProxyMiddleware({
      target: 'https://api.worldnewsapi.com', // Replace with your API's base URL
      changeOrigin: true,
    })
  );
};
