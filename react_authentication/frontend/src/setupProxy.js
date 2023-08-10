// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		createProxyMiddleware(['/company', '/api'], {
			target: 'https://xxxx-dev.xxx.com',
			changeOrigin: true,
		})
	);
};
