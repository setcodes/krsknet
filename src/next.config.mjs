// const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	// assetPrefix: isProd ? 'https://setcodes.github.io/krsknet' : undefined,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
};

export default nextConfig;
