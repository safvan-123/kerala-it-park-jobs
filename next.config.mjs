/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  async redirects() {
    return [
      {
        source: "/jobs-in-calicut",
        destination: "/jobs-in-kozhikode",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;