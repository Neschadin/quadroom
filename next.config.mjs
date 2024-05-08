/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/about-us',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
