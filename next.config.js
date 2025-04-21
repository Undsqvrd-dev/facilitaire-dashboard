/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Zorgt voor extra controles in React tijdens development
  images: {
    unoptimized: true,
    domains: ['drive.google.com', 'localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/logos/**',
      }
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)", // Pas headers toe op alle routes
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY", // Voorkom dat de site in een iFrame geladen wordt
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin", // Beter voor privacy
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=(self)", // Controleert toegang tot browser API's
          },
        ],
      },
    ];
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false, // Voorkom fouten met `fs` module in de browser
        path: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;