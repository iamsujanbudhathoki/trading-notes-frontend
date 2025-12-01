/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.wikihow.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.writofinance.com",
        port: "",
        pathname: "/**",
      },
      { protocol: "https", hostname: "www.icmarkets.com", pathname: "/**" },
      { protocol: "https", hostname: "www.pepperstone.com", pathname: "/**" },
      { protocol: "https", hostname: "public.bnbstatic.com", pathname: "/**" },
      { protocol: "https", hostname: "www.bybit.com", pathname: "/**" },
      { protocol: "https", hostname: "ftmo.com", pathname: "/**" },
      { protocol: "https", hostname: "the5ers.com", pathname: "/**" },
      { protocol: "https", hostname: "pocketoption.com", pathname: "/**" },
      { protocol: "https", hostname: "quotex.io", pathname: "/**" },
      { protocol: "https", hostname: "www.interactivebrokers.com", pathname: "/**" },
      { protocol: "https", hostname: "etoro-cdn.etorostatic.com", pathname: "/**" },
      { protocol: "https", hostname: "www.etoro.com", pathname: "/**" },
      { protocol: "https", hostname: "upload.wikimedia.org", pathname: "/**" },
      { protocol: "https", hostname: "logo.clearbit.com", pathname: "/**" },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
