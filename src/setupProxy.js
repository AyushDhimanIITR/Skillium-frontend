const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/students',
    createProxyMiddleware({
      target: 'https://skillium.up.railway.app/',
      changeOrigin: true,
    })
  );
};